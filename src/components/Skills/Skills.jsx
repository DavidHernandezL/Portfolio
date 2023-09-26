import { skills } from '../../data/constants'
import { Container, Desc, Skill, SkillImage, SkillItem, SkillList, SkillTitle, SkillsContainer, Title, Wrapper } from './Skills'

export const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Habilidades</Title>
        <Desc>Estas son las habilidades que he adquirido a lo largo de mi desarrollo en el mundo de la programación.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.id}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.id}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}