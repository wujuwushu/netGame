import { MSMDsc } from "../StateMachine/StateDec";
import { IPSM } from "../InputManage";
const { mState, mDefaultState }  = MSMDsc
const {InputState,InputManage} = IPSM;

@mDefaultState
@mState("default",InputManage)
export default class InputDefaultState extends  InputState{
    Start()
    {
        if(CC_DEBUG)
        console.log("default");
    }
    touch(touchEvent:cc.Touch)
    {
        if(CC_DEBUG)
        console.log("touch"+this.context.name);
        this.context._tar.forEach(value=>{
            if(value.touch)
            value.touch(touchEvent);
        })
    }
    touchStart(touchEvent:cc.Touch)
    {
        if(CC_DEBUG)
        console.log("touchStart"+this.context.name);
        this.context._tar.forEach(value=>{
            if(value.touchStart)
            value.touchStart(touchEvent);
        })
    }
    touchCancel(touchEvent:cc.Touch)
    {
        if(CC_DEBUG)
        console.log("touchCancel"+this.context.name);
        this.context._tar.forEach(value=>{
            if(value.touchCancel)
            value.touchCancel(touchEvent);
        })
    }
    touchEnd(touchEvent:cc.Touch)
    {
        if(CC_DEBUG)
        console.log("touchEnd"+this.context.name);
        this.context._tar.forEach(value=>{
            if(value.touchEnd)
            value.touchEnd(touchEvent);
        })
    }
    InputEvent(event:cc.Event,eventName:string)
    {
        this.context._tar.forEach(value=>{
            if(value[eventName])
            {
                value[eventName](event);
            }
        })
    }
}
