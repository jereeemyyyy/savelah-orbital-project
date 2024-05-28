import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ExpensesScreen from '../screens/expenses/ExpensesScreen';
import BudgetsScreen from '../screens/budgets/BudgetsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import LeaderBoardsScreen from '../screens/leaderboards/LeaderBoardsScreen';


export default function NavigationBar() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}> 
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Expenses" component={ExpensesScreen} />
            <Tab.Screen name="Budgets" component={BudgetsScreen} />
            <Tab.Screen name="LeaderBoards" component={LeaderBoardsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}