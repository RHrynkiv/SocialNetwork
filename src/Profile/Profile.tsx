import React from "react";
import s from "./Profile.module.css"
import Preloader from "../common/preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "./../images/icon.jpg"

const Profile = (props: any) => {
    let NewPostElement = React.createRef<HTMLTextAreaElement>()
    let OnChange = () => {
        let NewText = NewPostElement.current?.value;
        NewText ? props.OnChange(NewText) : props.OnChange('')
    }
    let AddPost = () => {
        props.AddPost()
    }
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.content}>
                <div className={s.content__img}><img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8PDxAPEA8QDw4PDw8PEA8PDg4QFREWFhURFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHR0tLS0vLS0tLS0rLi4tLS0tLi0rLS0tKy0tLS0tLS8tLS0rLS4tLS0tLS0rKy0tListK//AABEIAIkBbwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAACAQIDBQUFBgQGAwAAAAAAAQIDEQQSIQUTMUFRBmFxgZEyQmKhsRQiQ1JywQcj0eEVM4Ki8PEkU5L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQEAAwABBAEEAgMBAAAAAAAAAQIRAwQSITETMkFRYXGBIkLRBf/aAAwDAQACEQMRAD8A8NHU6ji1KLcZJ3Ti2mn1TGgAdfsP+IGLoWjWtiaa/wDY7VUu6pz80z0PYXbLZ+KtFVNzVf4Ve0G38MvZl637jw0Dm5ek47/qf06+LrOSnvzH7fTCpIVUkeCbD7X47B2VKq5U1+DVvUpeCXGPk0eh7C/iVhK1o4mLw0+GbWdF/wCparzXmedy9Hy08x5h6XF1vFfxPif3/wBdyqSHbtEOHxEKkVOnOM4SV4zhJSi13NEqZxzEu3wdu0KoIS4qEMOyIVU0NQ5CGF3aFyCCgRcguQRDkJIyIXIgQARd2hd2gFuIvIVNC7tAmGYReS7tC7pBmFzh5TshUkKqQbwVVBeSnuKqPevUcqHh6iKZFjMfToxzVJKK5L3peCJ8ombJ9wyOvONNXnKMU+F2lc5/H9r4qNqMXmfvTS+74Lmc1iNpVKjcpSbb5t3ZpXitPsRP5dvPbWHjxm/JMzcZ2ju7UllX5mk5Py5HJOsxN+X8C4tV0FXa1SXtTk/OxXntB9TDliu8r4jaMILNUnGCva8mkrjjp1fNjeljpPmLDE25mJh8ZGcVKEoyi+Eou6Jo1RW488Krya3aWK7y7HGWRz9KqS785b0mZdNbRjYnjTjcT/EGbxLoYbDOuouUZNzyuTTs2rJpR738iv2u7RPDQUKTjvp30d24Qs/v2634XG9i9lvDUnOelStllKLVnCKvli+/Vv8A6O/i6etOKb8kbvqHHy89r8scfHOZ7l2/2xtJtWbSur3s+avzK9avcousM3xwRxeXZPIkq1CtOqFSZXnI6+Pjc17HTmVKsx0qhXqTOulHPa2vMgAD23hAAAAAAAC9svbGJwss2HrTpPmov7sv1Rej80d9sT+KPCONpd2+ofWUG/o/I8zAy5OCnJ9UNuLqOTj+mX0TsvbOHxUc+HrQqLmou0o/qi9V5ovKR82UK86clOnOUJrhKEnGS8Gjs9i/xIxVK0cQliIcMztCsl4rSXmvM4OToJj6J16XF/6NZ8XjHsSqC705jYva/B4qyp1VGo/wqtoVL9Fyl5Nm5vkcVuKazkw768lbRsTq3vhd6Ut4G8J7Fdy9vQ3pS3yF3yF2DYXVVHKsihvV1YqqLqLsGw0FWQqq3M/erqQTx8Y9/gLsLYbGcpYivJMoVNqy91Jd71Iftut5WCK4O6v2b+GxDktSaVSxzVXbSj7KS73qZeM23OXvN93IccNrT4hnfkpV2NbaFKHtTSa4rizPrdp6Eb2UpPwSX1OJrYyT5laVRs3r0n5c1up/Dr6/bKVmoU4xfJ5m7fI57EY6dSTlOTlJ8WzPuOTN69PWvqGU8sysZxd4VXVQyVQr4x3LMq5FKs+pA5BcPjPuSZjjO1dSTxDTvaMIKPSzV387nYo5ztXs+/8A5EeSUZru4KS+htwRFbseo2aeEfYvFNVZ02/uzg5Jcsya/a/odrCR5xsPHwoVXUnFyWWSWW103bXXzNbF9rZNWo08r/NNqVvBB1HT2vfYhPT89aUy0u3jUMfb/aKGHg4wlGVd6KPFQ+KX9Dj/APGMbVTgqlSV+KpwWb/armnsrsxe08S313cXq/1S/ZGUdJSk7yT/AE1nqr8kZxx/aHs3gZ4mu8RWvKMZZnKX4lTkvBfskd1vSlTjGCUYJRjFWSWiSHZxcs/JOtOGvx1z7raqjZVCtnBzMPib96w6hHKZDnGykXFMTNtLUZXnIe5ENQ1rCJedgAHqPFAAAAAAAAAAAAAAAHRbG7ZYzDWjn3tNfh1rysu6XFfQ50CbVi0ZMKre1J2s49a2P27wte0aj+z1OlR/y2+6fD1sdMq10mmmnwad00fP5o7L25icN/k1ZRjzg/vU3/pf1Wpy36SP9Xbx9db1d7a6pG8UuvyOG2X26pztHExdOWn34XlTfe1xXzOow2Ip1IqdOcZxfvRakvkct+O1PcOqvNW/qV/7Y+grxMnw0KudIbLFJGfbM+mnfnuVicm+LZFOaRTrY0p1MU2VXgmfbO3PEemhUxdilWxrfAqSqXGNnRXp4hz25rSfOs3zI3JiNgaxSIZ90kC42dRLvIZTuPDSyqjXVbIbiOQu1WpcwZiHMKpB2nqW45EKY7OKYVCfMc12g21mTo0nePCc+vwru7y9t3HKnSlFO05rLFc7Pi/Q5rDbNq1ISnCN0nbjq33LmacdI9yw5rz9NVMBWhDocbt+y1RfZoJcpTT8c1/o0azmcl2TxFpVKd9GlNLvTs/qvQ6XMcPJT/KXp8NtpCbOGYgzBmJ7Wup3ITOQZgUxdp6mcgzkDkRYjExhHNOSiur+i6jipTOLMpEc5HObQ7QNrLRvHXWckr27kZS2jXvfe1L/AKnb0Na8EsLdVWJyPKqBvYnsnio+yoVF8MrP0lYy8Ts6vTvvKVSKXNxeX14HVFolwTS0e4VQABpAAAAAAAAAAAAAAAAAAAWMHjatGWalOUJdYu1+5rg/MrgAicdbgO2k9I4iF/jho/OPB+Ru4fadOsr05qXdwkvFcUeajoTcWnFtNcGnZrzM/ir9msc1vu9LcxHI47Bdo6sLKp/Mj1ek158/M3sFtejV0jK0vyS+7Ly6+QuzGkXiWlcS5HmIqlXkvUWKTymkV6lW5DKQ1yDBqTMJmInIbmDtPuSuQmYicgzD7S7kuYHNLV6JcXyREmMxNFVIuL4f85c/MMVpY7Sov8SHm7fUo47bsY6UrSf5n7C8Oof4NR+P/wClr8iaOy6C9z1lJ/K4ZVMzeWVhMJUxM3Um2o31l1+GJ02HpxhFQirRjokRQSSSSSS4JaJEmYm06vjrFf5YPaHAKL30eEn99dJPn5mIdRt2S3Er83C3jf8Apc5c0p6c3NERbwtbNxW6qxnyTtLvi+J2kKqkk0009U1waOBNzs9jrPcyej1h3PmieSm+V8HJ2z2y6PMGYjTFRjjt07MJmEBsMGmYrEKnCU5cIq/e+iOPx2MnWlmk/CPKK6I1+01Z2pwXBtyflw+rOfNuKuRrj6jkmZ7QAAauZ6wpiqRWzDlUOaYehoxGz6FT/MpU5Pq4q/rxMnFdlsJL2c9N/DK69JXNjOITFphnMRP2cniOyE1fd1Yy7pxcfmrmbiOzuLh+HmXWDUvlxO/QucqOWyJ4qy8uq0Jw0nGUX0lFxfzIz1GpJPR2a6PVGZidl4WfGjBd8Lwf+2xpHJv2TPD+JcCB1WI7N0X7E5x7naS/Yzq/Z6qvZlCXrFmkSymkwxgLVXZ1aPtU5eKWZeqKzQ0kAAAAAAAAAAAAAANDC7XrU7LNnj+Wevo+KNfDbapT0l9x/F7PqcwAshUXmHa5r68uojZyWHxdSn7Mmu7jF+RqYfbSelRW+KOq9BYuLtdsS5DTrRkrxkpLuY648Vp9wQy4oYNPQqZGKLFRKS4txlxUyVRJ6BsbcEJesrtFP7kF1k36L+5gm52i4U/GX0Rhl19OXl+oCxk001o1qn0YuR2zW0va/f0GlM3VbKx+9jr7cfaXX4kX1I43B4l05qa5cV1XNHV0K0ZxUou6a0MbVx2cXJseVi4ydRJNt2SV23wSGTqJJtuyWrb4Ix6k54qWWN40IvV85sUVXa+fyobVxaq1MyvlSUY35rr8ykW9pwjGrKMUlGOVJLwRUNo9OK27OgAAaXo28HKZU3gu9Me1260IVB28M1VxXiCPjTNl6VYhnXKc6xE6ppXjRPIuSrkUqpWdQbnNIoibysOoNzEOcXMVhalzDKlKMvajGXikxMwZh4WqtXZFCXu5f0tr5cCpV2AvcqNd0kn80amcTOGDw5+rsatHgoy/TL+tinVw1SPtQkvFO3qdZnDOLCyHHAdVVw9OXtQi++yv6lSpsmk+GaPg7r5hhYwANWrsZ+7NP9SaKtTZ1WPuN/ptL+4YSoA6UGtGmvFWEsIGgKAAtOcou8W0+qdjRw+15LSazLqtJf3M0AGumw+Lp1PZkr9HpL0Jzki5h9pVIaN5l0lq/UFxZ0Nxbmfh9p05aN5H8XD1LqkLFxY+44jTFzCxUSe2FyPMLcWH3MztB7NN98vojEN/bML0m/yuL8eX7mVgMKqrlHNlaV1pe5UemN/NlnZVFVIVqb55Wn0etmZ1SDi2mrNOzXQ3tnYJ0nJ5k7pLRWLTpQzZ8qzfmtqLVdmxDnPslTK55XlXO3zL2yNoKH8uekW21Lo+j7jXqSVnmtls734WOXq07apPI21GTVr2H7KY7J2GxKUsTK2saEX5zZpQiopRikktEkRUJLJHLZLKmkuSsFapljKXRN+iJlrE55c7jn/Nqfrl9SAWTbbb4t3fiIW55AAAE691RN6Vc4Zi+1U3Wd6G9KuYMwdpdyzvBN4V8wZh4mZWM4ZiDMLmDBqbMLmIMwZgw9T5wzkGYMwYNTZwzEOYMwYepcwuYhzBmDBqbMJmIswmYMLU2YHIhzCZgwalk0+OvjqV6mDpS91Lw0+g/MGYeFqnU2ZH3ZNeKTIJ7OmuGV+Ds/maeYMwsGsSeHkuMWvLT1I8p0GYjnTjLjFPy1FgYeUTKa88FB8Lrwd/qQTwD5ST8dBYGfYlo15w9ltd3FehLPCTXu38NSFwa4q3iGDWjQ2rynG3fHVehfhWjJXi013HPZRYtp3TafVaCxUXl0SkGYyaO0JLSSzLqtGXqOJjLg9ej0foGLiyWvBTjKL5q39GYuAvGrFPR3cX6M2cxm4yOWrGfJtN+KevyFhT+WtmEnUSTbdktWyJ1EldvTqVbOq7y0prhHnPvfcGK7i613d3VJPRcHN9X3E+NpqVOUUlorxXRroPTC4YFTZOIvFwb1jw/SS7Sqfypd9l8zPjFxrWjylw7n/ZlracvuJfEvowxPd4ZNgsPsFhoMsFh9gyhgbVwuNFNUHXC40ABbhcS4XAHXC424XAH3C4y4XAHXFuMuFwGnXC424lwwafcLjLhcBp9xLjQAadcLjQAadcLjQGWnXC40LiPTri3GXABp9wuMC4hqRMJa8dSO4txHps8PB+7bw0IZYJcm146k7YXDBqnLBS5NP5EcsPNcn5amhcW4sNSp4qcdHqu/j6i4qsppWvdP8AYtsZu4/lXogwajoxc1HN7KSsvzNc2WrjEFww9PuGYZcS4YenacdL9eZTx0rtLpr5ktSvbhq/kVZa6sMKZRZQsSWCwkmWDKPsFgDRAANUgAAAAAAIAAAAAAAAAAAAAAAAAAAAIAKAgACgIKAAgMAMBcQBAtwEAALi3EADAAAAXC4AgAAAAwACACSmkQzm34CMQRabYLDhBAlhLDhAMgAAB//Z"
                    alt=""/></div>
                <div className={s.profilePhoto}>
                    <img src={props.profile.photos.large?props.profile.photos.large:userPhoto} alt=''/>
                </div>
                <div className={s.description}>
                    <ProfileStatus fullName={props.profile.fullName} aboutMe={props.profile.aboutMe} status={props.status} updateStatus={props.updateStatus}/>
                </div>
            <div className={s.content__myposts}>
                <div className={s.content__photo}>
                    <img src={props.profile.photos.small?props.profile.photos.small:userPhoto} alt="Photo"/>
                </div>
                <div className={s.content__post}>
                        <textarea ref={NewPostElement} onChange={OnChange} placeholder="What`s new"
                                  value={props.NewPostText}/>
                    <button onClick={AddPost} className={s.Add}>Add
                    </button>

                </div>
                {
                    props.Posts.map((e: any, i: number) => {
                        return (
                            <div key={i} className={s.content__OtherPosts}>
                                <div className={s.content__photo}>
                                    <img src={props.profile.photos.small?props.profile.photos.small:userPhoto} alt="Photo"/>
                                </div>
                                <div>{e.text}</div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
)
}
export default Profile