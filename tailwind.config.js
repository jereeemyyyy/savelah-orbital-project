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
            "./app/screens/home/HomeScreen.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

