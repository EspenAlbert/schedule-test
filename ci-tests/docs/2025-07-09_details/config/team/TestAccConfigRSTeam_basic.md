# config/team/TestAccConfigRSTeam_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 4 seconds
### 2025-04-12
#### PASS 5 seconds
### 2025-04-13
#### PASS 4 seconds
### 2025-04-14
#### PASS 5 seconds
### 2025-04-15
#### PASS 5 seconds
### 2025-04-16
#### PASS 4 seconds
#### PASS 4 seconds
### 2025-04-17
#### PASS 5 seconds
### 2025-04-18
#### PASS 5 seconds
### 2025-04-19
#### PASS 5 seconds
### 2025-04-20
#### PASS 4 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 5 seconds
### 2025-04-23
#### PASS 5 seconds
### 2025-04-24
#### PASS 6 seconds
### 2025-04-25
#### PASS 5 seconds
### 2025-04-26
#### PASS 24 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 7 seconds
### 2025-04-29
#### PASS 5 seconds
### 2025-04-30
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-05-01
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-02
#### PASS 6 seconds
### 2025-05-03
#### PASS 5 seconds
### 2025-05-04
#### PASS 5 seconds
### 2025-05-05
#### PASS 7 seconds
### 2025-05-06
#### PASS 5 seconds
### 2025-05-07
#### PASS 5 seconds
### 2025-05-08
#### PASS 5 seconds
### 2025-05-09
#### PASS 7 seconds
### 2025-05-10
#### PASS 5 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:14.4643989Z === RUN   TestAccConfigRSTeam_basic
2025-05-11T00:30:14.4647268Z === CONT  TestAccConfigRSTeam_basic
2025-05-11T00:30:14.4710082Z === NAME  TestAccConfigRSTeam_basic
2025-05-11T00:30:14.4710569Z     resource_team_test.go:26: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:14.4710952Z         
2025-05-11T00:30:14.4711862Z         Error: error creating Team information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4712397Z         
2025-05-11T00:30:14.4712703Z           with mongodbatlas_team.test,
2025-05-11T00:30:14.4713289Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_team" "test":
2025-05-11T00:30:14.4713826Z           12: 		resource "mongodbatlas_team" "test" {
2025-05-11T00:30:14.4714262Z         
2025-05-11T00:30:14.4714876Z --- FAIL: TestAccConfigRSTeam_basic (0.78s)
```
### 2025-05-12
#### PASS 5 seconds
### 2025-05-13
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-05-14
#### PASS 5 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 7 seconds
### 2025-05-17
#### PASS 5 seconds
### 2025-05-18
#### PASS 6 seconds
### 2025-05-19
#### PASS 5 seconds
### 2025-05-20
#### PASS 4 seconds
### 2025-05-21
#### PASS 5 seconds
### 2025-05-22
#### PASS 5 seconds
### 2025-05-23
#### PASS 5 seconds
### 2025-05-24
#### PASS 5 seconds
### 2025-05-25
#### PASS 6 seconds
### 2025-05-26
#### PASS 5 seconds
### 2025-05-27
#### PASS 5 seconds
### 2025-05-28
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-05-29
#### PASS 5 seconds
### 2025-05-30
#### PASS 6 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-06-02
#### PASS 4 seconds
#### PASS 5 seconds
#### PASS 8 seconds
### 2025-06-03
#### PASS 6 seconds
### 2025-06-04
#### PASS 5 seconds
### 2025-06-05
#### PASS 7 seconds
### 2025-06-06
#### PASS 5 seconds
### 2025-06-07
#### PASS 7 seconds
### 2025-06-08
#### PASS 4 seconds
### 2025-06-09
#### PASS 5 seconds
### 2025-06-10
#### PASS 7 seconds
### 2025-06-11
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-06-12
#### PASS 5 seconds
### 2025-06-13
#### PASS 4 seconds
### 2025-06-14
#### PASS 5 seconds
### 2025-06-15
#### PASS 5 seconds
### 2025-06-16
#### PASS 7 seconds
### 2025-06-17
#### PASS 7 seconds
### 2025-06-18
#### PASS 6 seconds
#### PASS 5 seconds
### 2025-06-19
#### PASS 4 seconds
### 2025-06-20
#### PASS 7 seconds
### 2025-06-21
#### PASS 6 seconds
### 2025-06-22
#### PASS 4 seconds
### 2025-06-23
#### PASS 7 seconds
### 2025-06-24
#### PASS 5 seconds
### 2025-06-25
#### PASS 5 seconds
### 2025-06-26
#### PASS 5 seconds
### 2025-06-27
#### PASS 7 seconds
### 2025-06-28
#### PASS 4 seconds
### 2025-06-29
#### PASS 5 seconds
### 2025-06-30
#### PASS 5 seconds
### 2025-07-01
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### PASS 4 seconds
### 2025-07-07
#### PASS 4 seconds
### 2025-07-08
#### PASS 7 seconds
### 2025-07-09
#### PASS 7 seconds