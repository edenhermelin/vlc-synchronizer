# monolo-hermelin-player

**a VLC based video synchronizer in NodeJS**

# [ VLM commands ]

###  Commands Syntax:


       new (name) vod|broadcast|schedule [properties]

       setup (name) (properties)

       show [(name)|media|schedule]

       del (name)|all|media|schedule

       control (name) [instance_name] (command)

       save (config_file)

       export

       load (config_file)

#### Media Proprieties Syntax:

       input (input_name)

       inputdel (input_name)|all

       inputdeln input_number

       output (output_name)

       option (option_name)[=value]

       enabled|disabled

       loop|unloop (broadcast only)

       mux (mux_name)

#### Schedule Proprieties Syntax:

       enabled|disabled

       append (command_until_rest_of_the_line)

       date (year)/(month)/(day)-(hour):(minutes):(seconds)|now

       period (years_aka_12_months)/(months_aka_30_days)/(days)-(hours):(minutes):(seconds)

       repeat (number_of_repetitions)

####   Control Commands Syntax:

       play [input_number]

       pause

       stop

       seek [+-](percentage) 
       
       [+-](seconds)s 
       
       [+-](milliseconds)ms

#     [ CLI commands ]

        add XYZ  . . . . . . . . . . . . . . . . . . . . add XYZ to playlist
        
        enqueue XYZ  . . . . . . . . . . . . . . . . . queue XYZ to playlist
        
        playlist . . . . . . . . . . . . .  show items currently in playlist
        
        search [string]  . .  search for items in playlist (or reset search)
        
        delete [X] . . . . . . . . . . . . . . . . delete item X in playlist
        
        move [X][Y]  . . . . . . . . . . . . move item X in playlist after Y
        
        sort key . . . . . . . . . . . . . . . . . . . . . sort the playlist
        
        sd [sd]  . . . . . . . . . . . . . show services discovery or toggle
        
        play . . . . . . . . . . . . . . . . . . . . . . . . . . play stream
        
        stop . . . . . . . . . . . . . . . . . . . . . . . . . . stop stream
        
        next . . . . . . . . . . . . . . . . . . . . . .  next playlist item
        
        prev . . . . . . . . . . . . . . . . . . . .  previous playlist item
        
        goto, gotoitem . . . . . . . . . . . . . . . . .  goto item at index
        
        repeat [on|off]  . . . . . . . . . . . . . .  toggle playlist repeat
        
        loop [on|off]  . . . . . . . . . . . . . . . .  toggle playlist loop
        
        random [on|off]  . . . . . . . . . . . . . .  toggle playlist random
        
        clear  . . . . . . . . . . . . . . . . . . . . .  clear the playlist
        
        status . . . . . . . . . . . . . . . . . . . current playlist status
        
        title [X]  . . . . . . . . . . . . . . set/get title in current item
        
        title_n  . . . . . . . . . . . . . . . .  next title in current item
        
        title_p  . . . . . . . . . . . . . .  previous title in current item
        
        chapter [X]  . . . . . . . . . . . . set/get chapter in current item
        
        chapter_n  . . . . . . . . . . . . . .  next chapter in current item
        
        chapter_p  . . . . . . . . . . . .  previous chapter in current item
        
        seek X . . . . . . . . . . . seek in seconds, for instance `seek 12'
        
        pause  . . . . . . . . . . . . . . . . . . . . . . . .  toggle pause
        
        fastforward  . . . . . . . . . . . . . . . . . . set to maximum rate
        
        rewind . . . . . . . . . . . . . . . . . . . . . set to minimum rate
        
        faster . . . . . . . . . . . . . . . . . .  faster playing of stream
        
        slower . . . . . . . . . . . . . . . . . .  slower playing of stream
        
        normal . . . . . . . . . . . . . . . . . .  normal playing of stream
        
        rate [playback rate] . . . . . . . . . .  set playback rate to value
        
        frame  . . . . . . . . . . . . . . . . . . . . . play frame by frame
        
        fullscreen, f, F [on|off]  . . . . . . . . . . . . toggle fullscreen
        
        info [X] . .  information about the current stream (or specified id)
        
        stats  . . . . . . . . . . . . . . . .  show statistical information
        
        get_time . . . . . . . . .  seconds elapsed since stream's beginning
        
        is_playing . . . . . . . . . . . .  1 if a stream plays, 0 otherwise
        
        get_title  . . . . . . . . . . . . . the title of the current stream
        
        get_length . . . . . . . . . . . .  the length of the current stream
        
        volume [X] . . . . . . . . . . . . . . . . . .  set/get audio volume
        
        volup [X]  . . . . . . . . . . . . . . .  raise audio volume X steps
        
        voldown [X]  . . . . . . . . . . . . . .  lower audio volume X steps
        
        achan [X]  . . . . . . . . . . . .  set/get stereo audio output mode
        
        atrack [X] . . . . . . . . . . . . . . . . . . . set/get audio track
        
        vtrack [X] . . . . . . . . . . . . . . . . . . . set/get video track
        
        vratio [X] . . . . . . . . . . . . . . .  set/get video aspect ratio
        
        vcrop, crop [X]  . . . . . . . . . . . . . . . .  set/get video crop
        
        vzoom, zoom [X]  . . . . . . . . . . . . . . . .  set/get video zoom
        
        vdeinterlace [X] . . . . . . . . . . . . . set/get video deinterlace
        
        vdeinterlace_mode [X]  . . . . . . .  set/get video deinterlace mode
        
        snapshot . . . . . . . . . . . . . . . . . . . . take video snapshot
        
        strack [X] . . . . . . . . . . . . . . . . .  set/get subtitle track
        
        hotkey, key [hotkey name]  . . . . . . . . . . simulate hotkey press
        
        vlm  . . . . . . . . . . . . . . . . . . . . . . . . .  load the VLM
        
        set [var [value]]  . . . . . . . . . . . . . . . . . set/get env var
        
        save_env . . . . . . . . . . . .  save env vars (for future clients)
        
        alias [cmd]  . . . . . . . . . . . . . . . . set/get command aliases
        
        description  . . . . . . . . . . . . . . . . .  describe this module
        
        license  . . . . . . . . . . . . . . . . print VLC's license message
        
        help, ? [pattern]  . . . . . . . . . . . . . . . . .  a help message
        
        longhelp [pattern] . . . . . . . . . . . . . . a longer help message
        
        lock . . . . . . . . . . . . . . . . . . . .  lock the telnet prompt
        
        logout . . . . . . . . . . . . . .  exit (if in a socket connection)
        
        quit . . . . . . . .  quit VLC (or logout if in a socket connection)
        
        shutdown . . . . . . . . . . . . . . . . . . . . . . .  shutdown VLC

# Electron Documentation:

The basic application contains these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
