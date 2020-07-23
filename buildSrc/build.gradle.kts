plugins {
    //id("org.springframework.boot") version "2.2.4.RELEASE" apply false
    id("com.gorylenko.gradle-git-properties") version "1.5.2" apply false
    kotlin("jvm") version "1.3.60"
}

repositories{
    jcenter()
}

id("org.springframework.boot") version "2.2.4.RELEASE"

class Version(val name:String){
    lateinit var version:String
}

fun id(name: String):Version{
    println(name)
    return Version(name)
}

infix fun Version.version(version :String) { this.version = version}
