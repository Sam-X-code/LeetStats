document.addEventListener("DOMContentLoaded", function () {

    const fetchBtn = document.getElementById('fetch-btn');

    const totalProgressCircle = document.querySelector('.total-progress');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');

    const usernameInput = document.getElementById('username');

    
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');

    const totalLabel = document.getElementById('total-label');
    const statsContainer = document.querySelector('.stats-cards');


    // Validate Username
    function validateUsername(username) {

        if (username.trim() === '') {
            alert("Username cannot be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;

        if (!regex.test(username)) {
            alert("Invalid Username");
            return false;
        }

        return true;
    }


    // Fetch LeetCode User Details
    async function fetchUserDetails(username) {

        const targetURL =
            "https://corsproxy.io/?https://leetcode.com/graphql";

        const query = `
        query userSessionProgress($username: String!) {

            allQuestionsCount {
                difficulty
                count
            }

            matchedUser(username: $username) {

                profile {
                    ranking
                    reputation
                    starRating
                }

                submitStats {

                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }

                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }
        `;

        try {

            fetchBtn.textContent = "Fetching...";
            fetchBtn.disabled = true;

            const response = await fetch(targetURL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    query: query,
                    variables: {
                        username: username
                    }
                })

            });

            const parsedata = await response.json();

            // console.log(data);


            // Check if user exists
            if (!parsedata.data.matchedUser) {
                alert("User not found");
                return;
            }


            // Solved Stats
            const solvedStats =
                parsedata.data.matchedUser.submitStats.acSubmissionNum;


            // Submission Stats
            const totalStats =
                parsedata.data.matchedUser.submitStats.totalSubmissionNum;


            // Total Questions Count
            const allQuestionsCount =
                parsedata.data.allQuestionsCount;


            // Profile
            const profile =
                parsedata.data.matchedUser.profile;


            // Solved Questions
            const allSolved = solvedStats[0].count;

            const easySolved = solvedStats[1].count;

            const mediumSolved = solvedStats[2].count;

            const hardSolved = solvedStats[3].count;


            // Total Questions Available
            const allCount = allQuestionsCount[0].count;

            const easyCount = allQuestionsCount[1].count;

            const mediumCount = allQuestionsCount[2].count;

            const hardCount = allQuestionsCount[3].count;


            // Total Submissions
            const allSubmissions = totalStats[0].submissions;

            const easySubmissions = totalStats[1].submissions;

            const mediumSubmissions = totalStats[2].submissions;

            const hardSubmissions = totalStats[3].submissions;


            // Percentages
            const totalPercent =
                (allSolved / allCount) * 100;

            const easyPercent =
                (easySolved / easyCount) * 100;

            const mediumPercent =
                (mediumSolved / mediumCount) * 100;

            const hardPercent =
                (hardSolved / hardCount) * 100;


            // user Profile
            const ranking = profile.ranking;
            const reputation = profile.reputation;
            const starRating = profile.starRating;
            const acceptedSubmissions = solvedStats[0].submissions;

            const acceptanceRate = ((acceptedSubmissions / allSubmissions) * 100).toFixed(2);

            // update profile card
            statsContainer.innerHTML = `
                <div class="card">
                    <div class="card-title">Ranking</div>
                    <div class="card-value">${ranking}</div>
                </div>

                <div class="card">
                    <div class="card-title">Reputation</div>
                    <div class="card-value">${reputation}</div>
                </div>

                <div class="card">
                    <div class="card-title">Star Rating</div>
                    <div class="card-value">${starRating}</div>
                </div>

                <div class="card">
                    <div class="card-title">Acceptance Rate</div>
                    <div class="card-value">${acceptanceRate}%</div>
                </div>

                <div class="card">
                    <div class="card-title">Total Submissions</div>
                    <div class="card-value">${allSubmissions}</div>
                </div>

                <div class="card">
                    <div class="card-title">Easy Submissions</div>
                    <div class="card-value">${easySubmissions}</div>
                </div>

                <div class="card">
                    <div class="card-title">Medium Submissions</div>
                    <div class="card-value">${mediumSubmissions}</div>
                </div>

                <div class="card">
                    <div class="card-title">Hard Submissions</div>
                    <div class="card-value">${hardSubmissions}</div>
                </div>

            `;

            // Update Labels
             totalLabel.innerHTML = `
                <span class="difficulty">Total</span>
                <span class="count">
                    ${allSolved}<span class="total">/${allCount}</span>
                </span>
            `;


            easyLabel.innerHTML = `
                <span class="difficulty">Easy</span>
                <span class="count">
                    ${easySolved}<span class="total">/${easyCount}</span>
                </span>
            `;  

            mediumLabel.innerHTML = `
                <span class="difficulty">Medium</span>
                <span class="count">
                    ${mediumSolved}<span class="total">/${mediumCount}</span>
                </span>
            `;

            hardLabel.innerHTML = `
                <span class="difficulty">Hard</span>
                <span class="count">
                    ${hardSolved}<span class="total">/${hardCount}</span>
                </span>
            `;


            // Update Progress Circles
            totalProgressCircle.style.setProperty(
                "--progress-degree",
                `${totalPercent}%`
            );

            easyProgressCircle.style.setProperty(
                "--progress-degree",
                `${easyPercent}%`
            );

            mediumProgressCircle.style.setProperty(
                "--progress-degree",
                `${mediumPercent}%`
            );

            hardProgressCircle.style.setProperty(
                "--progress-degree",
                `${hardPercent}%`
            );


            // Console Logs
            // console.log("Username:", username);
            // console.log("Ranking:", profile.ranking);
            // console.log("Reputation:", profile.reputation);
            // console.log("Star Rating:", profile.starRating);
            // console.log("Total Solved:",
            //     allSolved, "/", allCount);
            // console.log("Easy:",
            //     easySolved, "/", easyCount);
            // console.log("Medium:",
            //     mediumSolved, "/", mediumCount);
            // console.log("Hard:",
            //     hardSolved, "/", hardCount);
            // console.log("Total Submissions:",
            //     allSubmissions);
            // console.log("Easy Submissions:",
            //     easySubmissions);
            // console.log("Medium Submissions:",
            //     mediumSubmissions);
            // console.log("Hard Submissions:",
            //     hardSubmissions);


            // Show Stats
            statsContainer.style.display = "flex";

        }
        catch (error) {

            console.error("Error fetching data:", error);

            alert("Unable to fetch user details");

        }
        finally {

            fetchBtn.textContent = "Fetch";
            fetchBtn.disabled = false;

        }
    }


    // Button Click
    fetchBtn.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        console.log("login username:", username);

        if (!validateUsername(username)) {
            return;
        }

        fetchUserDetails(username);

    });

});