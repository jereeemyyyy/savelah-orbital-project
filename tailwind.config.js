/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.{js,jsx,ts,tsx}", 
            "./app/screens/home/HomeScreen.{js,jsx,ts,tsx}",
            "./app/screens/startpage/WelcomeScreen.{js,jsx,ts,tsx}",
            "./app/screens/startpage/LoginScreen.{js,jsx,ts,tsx}",
            "./app/screens/startpage/SignUpScreen.{js,jsx,ts,tsx}",
            "./app/screens/startpage/components/SocialMediaIcons.{js,jsx,ts,tsx}",
            "./app/screens/startpage/components/LoginCard.{js,jsx,ts,tsx}",
            "./app/components/BackButton.{js,jsx,ts,tsx}",
            "./app/screens/startpage/components/RegistrationCard.{js,jsx,ts,tsx}",
            "./app/screens/home/HomeScreen.{js,jsx,ts,tsx}",
            "./app/screens/expenses/ExpensesScreen.{js,jsx,ts,tsx}",
            "./app/screens/budgets/BudgetsScreen.{js,jsx,ts,tsx}",
            "./app/screens/leaderboards/LeaderBoardsScreen.{js,jsx,ts,tsx}",
            "./app/screens/profile/ProfileScreen.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

