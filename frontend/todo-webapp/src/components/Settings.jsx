import { useState } from 'react'

const Settings = ({completedColor}) => {
    const [settingActive,setSettingActive] = useState(false)

    const setSetting = () => {
        setSettingActive(!settingActive)
        console.log(settingActive)
    }

  return (
    <div className='settings-container'>
        <div className='settings'>
          <button type='button' className='btn-blank btn-settings' onClick={setSetting}>
              <i className="fas fa-cog fa-spin" ></i>
          </button>
          {settingActive && 
            <div className='theme-container'>
            <ul>
                <li className='green' onClick={() => completedColor('green-theme')}></li>
                <li className='gray' onClick={() => completedColor('gray-theme')}></li>
                <li className='darkblue' onClick={() => completedColor('darkblue-theme')}></li>
            </ul>
            </div>}
        </div>
    </div>
  )
}

export default Settings
