<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UStudy</title>
    <link rel="stylesheet" href="uHelpstyle.css">
</head>

<body>
    <div class="header-strip">
        <div class="navbar">
            <div class="navbar-item dropdown">
                <button class="dropbtn">Navigation</button>
                <div class="dropdown-content">
                    <a href="home.html">Back to Home</a>
                    <a href="forum.html">UForum</a>
                    <a href="#" class="logout-link">Log Out</a>
                    <a href="RoomReservation.html">Reserve a Room</a>
                </div>
            </div>
        </div>

        <div class="main-title">
            <h1>UHelp</h1>
        </div>

        <div class="user">
            <div class="user-item">Student 1</div>
        </div>
    </div>

    <div class="tutoring-schedule">
        <h2>Schedule a tutoring session</h2>
        <button id="scheduleButton">Reserve a time</button>
        <form id="reservationForm" style="display: none;">
            <label for="class">Class:</label>
            <input type="text" id="class" name="class" required>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required>
            <button type="submit">Submit</button>
        </form>
    </div>

    <div class="content">
        <div class="content-item">
            <h2>Upcoming SI Sessions</h2>
            <div id="upcomingSiSessions"></div>
            <p>CS326: May 1, 2024 - 2:00 PM</p>
            <p>CS377: May 3, 2024 - 4:00 PM</p>
        </div>
        <div class="content-item">
            <h2>Office Hours</h2>
            <div id="officeHours"></div>
            <p>Tim Richards: May 2, 2024 - 11:00 AM</p>
            <p>Jamie Davila: May 4, 2024 - 1:00 PM</p>
        </div>
        <div class="content-item">
            <h2>Tutoring</h2>
            <div id="studyTimes"></div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/pouchdb@8.0.1/dist/pouchdb.min.js"></script>
    <script type="module" src="db.js"></script>
    <script type="module" src="uHelpScript.js"></script>
</body>

</html>
