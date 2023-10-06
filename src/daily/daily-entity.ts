import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('daily_records')
export class DailyEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    
    @Column({ type: 'float' })
    km_walkend: number;

    @Column({ type: 'float' })
    sepen_amount: number // valor gasto
    @Column({ type: 'float' })

    gross_amount: number; // valor bruto

    @Column({ type: 'float' })
    net_amount: number; // valor liquido

    @CreateDateColumn({})
    create_at: Date;
    
    @UpdateDateColumn({})
    update_at: Date;


}