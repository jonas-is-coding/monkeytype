# Adding Song Lyrics as a Typing Mode

This feature allows users to type song lyrics in Monkeytype by integrating the Lyrics.ovh API. Instead of manually adding each line of a song, lyrics are automatically retrieved and presented for typing practice.

## Overview

The inspiration for this feature came from a video by [Leon Silicon](https://www.youtube.com/shorts/fem97mdWnDU), where he typed song lyrics. While the idea was exciting, I wanted to automate the process of adding song lyrics in Monkeytype without the need for manual entry. I integrated the Lyrics.ovh API, which fetches full lyrics of songs automatically.

## The API

The API does not require any API secrets or similar. It is completely free and returns a response in JSON format as a lyrics object of type string.

### Example Request
```code bash
curl https://api.lyrics.ovh/v1/Ed%20Sheeran/Shape%20of%20You
```

### Example Response
```json
{
    "lyrics": "The club isn't the best place to find a lover so the bar is where I go\r\nMe and my friends at the table doing shots..."
}