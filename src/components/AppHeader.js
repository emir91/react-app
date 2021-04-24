import logo from '../assets/images/paragon.png'
import Navigator from './Navigator'

const AppHeader = () => {
    return (
        <header>
            <div className="left">
                <img src={logo} alt="Paragon logo"/>
                <h2 className="title">My React App</h2>
            </div>
            <div className="right">
                <Navigator />
            </div>
        </header>
    )
}

export default AppHeader;