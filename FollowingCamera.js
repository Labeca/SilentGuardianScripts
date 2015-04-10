//----------------------------------------------------------------------------------------------
// Simple script that allow smooth move towards the target
// It used to allow camera follow player smoothly 
// Camera always tries to keep initial offset against the player
//----------------------------------------------------------------------------------------------

#pragma strict


var target : Transform;  // Object to follow
var smoothTime = 0.3;    // Smoothing parameter. How fast initial offset will be restored


// Important internal values. Please don't change them blindly
private var velocity = Vector3.zero;
private var initialPosition: Vector3;


//===================================================================================================
// Save initial offfset against target
function Start () 
{
	initialPosition = transform.position - target.position;
}

//----------------------------------------------------------------------------------
// Smoothly move the camera towards that target position
function Update () 
{
    var targetPosition : Vector3 =  Vector3(target.position.x + initialPosition.x, target.position.y + initialPosition.y, target.position.z + initialPosition.z); 
    transform.position = Vector3.SmoothDamp(transform.position, targetPosition, velocity, smoothTime);
}

//----------------------------------------------------------------------------------