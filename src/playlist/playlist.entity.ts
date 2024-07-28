// import { Song } from 'src/songs/song.entity';
// import { User } from 'src/songs/user.entity';
// import {
//   Column,
//   Entity,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
//
// @Entity('playlist')
// export class PlaylistEntity {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   name: string;
//
//   @OneToMany(() => Song, (song) => song.playlist)
//   songs: Song[];
//
//   @ManyToOne(() => User, (user) => user.playlist)
//   user: User;
// }
