using UnityEngine;
using System.Collections;
using UnityEngine.UI;

[RequireComponent (typeof(AudioSource))]

public class cutSceneScript : MonoBehaviour {

    public MovieTexture movieTexture;
    private AudioSource audio;

	// Use this for initialization
	void Start () {
        GetComponent<RawImage>().texture = movieTexture as MovieTexture;
        audio = GetComponent<AudioSource>();
        audio.clip = movieTexture.audioClip;
        movieTexture.Play();
        audio.Play();

		StartCoroutine(waitAndLoad ());
    }
	
	// Update is called once per frame
	void Update () {
        if(Input.GetKeyDown(KeyCode.Space) && movieTexture.isPlaying)
        {
            movieTexture.Pause();

        }
        else if (Input.GetKeyDown(KeyCode.Space) && !movieTexture.isPlaying)
        {
            movieTexture.Play();

        }
    }
	IEnumerator waitAndLoad()
	{
		yield return new WaitForSeconds (7);
		Application.LoadLevel ("mainMenuScene");
	}

}
