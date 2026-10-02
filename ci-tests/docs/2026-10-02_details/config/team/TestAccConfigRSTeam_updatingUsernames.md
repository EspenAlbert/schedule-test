# config/team/TestAccConfigRSTeam_updatingUsernames Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) |  | dev | 3.09s
[2026-09-11 00:45](#error-2026-09-11t0045530000) |  | dev | 4.00s
[2026-09-11 06:44](#error-2026-09-11t0644330000) |  | dev | 3.08s
[2026-09-12 00:44](#error-2026-09-12t0044110000) |  | dev | 2.07s
[2026-09-14 00:49](#error-2026-09-14t0049310000) |  | dev | 2.07s
[2026-09-15 00:46](#error-2026-09-15t0046470000) |  | dev | 2.10s
[2026-09-16 00:45](#error-2026-09-16t0045240000) |  | dev | 3.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 11 seconds
- 2026-09-03 PASS 8 seconds
- 2026-09-04 PASS 8 seconds
- 2026-09-05 PASS 7 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 12 seconds
- 2026-09-08 PASS 6 seconds
- 2026-09-09 PASS 8 seconds
- 2026-09-10
  - PASS 7 seconds
  - FAIL 3 seconds

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4614689Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-10T17:00:43.4617013Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-10T17:00:43.4679469Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-10T17:00:43.4680169Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-10T17:00:43.4680693Z         stdout
2026-09-10T17:00:43.4680930Z         
2026-09-10T17:00:43.4681696Z         Terraform used the selected providers to generate the following execution
2026-09-10T17:00:43.4682368Z         plan. Resource actions are indicated with the following symbols:
2026-09-10T17:00:43.4682838Z           ~ update in-place
2026-09-10T17:00:43.4683128Z         
2026-09-10T17:00:43.4683712Z         Terraform will perform the following actions:
2026-09-10T17:00:43.4684069Z         
2026-09-10T17:00:43.4684486Z           # mongodbatlas_team.test will be updated in-place
2026-09-10T17:00:43.4684980Z           ~ resource "mongodbatlas_team" "test" {
2026-09-10T17:00:43.4686095Z                 id        = "aWQ=:NmFhMmUyMTg4YjE3OTEwNjBlMWNhMWEy-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-10T17:00:43.4686879Z                 name      = "test-acc-tf-290591863635453375"
2026-09-10T17:00:43.4687728Z               ~ usernames = [
2026-09-10T17:00:43.4688427Z                   + "andrea.angiolillo@mongodb.com",
2026-09-10T17:00:43.4689213Z                 ]
2026-09-10T17:00:43.4689829Z                 # (2 unchanged attributes hidden)
2026-09-10T17:00:43.4690373Z             }
2026-09-10T17:00:43.4690810Z         
2026-09-10T17:00:43.4691412Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-10T17:00:43.4706825Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (3.92s)
```

- 2026-09-11
  - FAIL 4 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7880713Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-11T00:45:53.7882073Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-11T00:45:53.7920079Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-11T00:45:53.7920605Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-11T00:45:53.7921008Z         stdout
2026-09-11T00:45:53.7921197Z         
2026-09-11T00:45:53.7921758Z         Terraform used the selected providers to generate the following execution
2026-09-11T00:45:53.7922260Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T00:45:53.7922613Z           ~ update in-place
2026-09-11T00:45:53.7922832Z         
2026-09-11T00:45:53.7923114Z         Terraform will perform the following actions:
2026-09-11T00:45:53.7923379Z         
2026-09-11T00:45:53.7923701Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T00:45:53.7924075Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T00:45:53.7924870Z                 id        = "aWQ=:NmFhMzRlZTNiNWQ3ZWRhNzRmN2VkNDcy-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T00:45:53.7925455Z                 name      = "test-acc-tf-8440649741562035709"
2026-09-11T00:45:53.7925778Z               ~ usernames = [
2026-09-11T00:45:53.7926161Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T00:45:53.7926540Z                 ]
2026-09-11T00:45:53.7926857Z                 # (2 unchanged attributes hidden)
2026-09-11T00:45:53.7927119Z             }
2026-09-11T00:45:53.7927335Z         
2026-09-11T00:45:53.7927611Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T00:45:53.7928503Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (4.03s)
```

  - FAIL 3 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8717456Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-11T06:44:33.8719968Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-11T06:44:33.8726812Z    test_name=TestAccConfigDSTeam_basic test_working_directory=/tmp/plugintest3149445682 test_step_number=1
2026-09-11T06:44:33.8747978Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-11T06:44:33.8748771Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-11T06:44:33.8749310Z         stdout
2026-09-11T06:44:33.8749661Z         
2026-09-11T06:44:33.8750381Z         Terraform used the selected providers to generate the following execution
2026-09-11T06:44:33.8751049Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T06:44:33.8751495Z           ~ update in-place
2026-09-11T06:44:33.8751764Z         
2026-09-11T06:44:33.8752126Z         Terraform will perform the following actions:
2026-09-11T06:44:33.8752459Z         
2026-09-11T06:44:33.8752854Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T06:44:33.8753335Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T06:44:33.8754206Z                 id        = "aWQ=:NmFhM2EzMzk4MjFlMGVhN2E0NWYzMzI4-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T06:44:33.8754954Z                 name      = "test-acc-tf-1215580412945886995"
2026-09-11T06:44:33.8755363Z               ~ usernames = [
2026-09-11T06:44:33.8755854Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T06:44:33.8756209Z                 ]
2026-09-11T06:44:33.8756612Z                 # (2 unchanged attributes hidden)
2026-09-11T06:44:33.8756939Z             }
2026-09-11T06:44:33.8757167Z         
2026-09-11T06:44:33.8757513Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T06:44:33.8767604Z   
2026-09-11T06:44:33.8779024Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (3.82s)
```

- 2026-09-12

### Error 2026-09-12T00:44:11+00:00
```
2026-09-12T00:44:11.6706816Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-12T00:44:11.6707888Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-12T00:44:11.6737387Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-12T00:44:11.6737959Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-12T00:44:11.6738389Z         stdout
2026-09-12T00:44:11.6738603Z         
2026-09-12T00:44:11.6739195Z         Terraform used the selected providers to generate the following execution
2026-09-12T00:44:11.6739709Z         plan. Resource actions are indicated with the following symbols:
2026-09-12T00:44:11.6740385Z           ~ update in-place
2026-09-12T00:44:11.6740618Z         
2026-09-12T00:44:11.6740915Z         Terraform will perform the following actions:
2026-09-12T00:44:11.6741185Z         
2026-09-12T00:44:11.6741506Z           # mongodbatlas_team.test will be updated in-place
2026-09-12T00:44:11.6741891Z           ~ resource "mongodbatlas_team" "test" {
2026-09-12T00:44:11.6742574Z                 id        = "aWQ=:NmFhNGEwMTM3NDIzZjQ3MjJjMDJiYjhk-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-12T00:44:11.6743150Z                 name      = "test-acc-tf-6418836094124988864"
2026-09-12T00:44:11.6743476Z               ~ usernames = [
2026-09-12T00:44:11.6743857Z                   + "andrea.angiolillo@mongodb.com",
2026-09-12T00:44:11.6744146Z                 ]
2026-09-12T00:44:11.6744472Z                 # (2 unchanged attributes hidden)
2026-09-12T00:44:11.6744740Z             }
2026-09-12T00:44:11.6744935Z         
2026-09-12T00:44:11.6745216Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-12T00:44:11.6753309Z   
2026-09-12T00:44:11.6762043Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (2.68s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3907208Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-14T00:49:31.3908923Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-14T00:49:31.3951594Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-14T00:49:31.3952138Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-14T00:49:31.3952606Z         stdout
2026-09-14T00:49:31.3952868Z         
2026-09-14T00:49:31.3953570Z         Terraform used the selected providers to generate the following execution
2026-09-14T00:49:31.3954103Z         plan. Resource actions are indicated with the following symbols:
2026-09-14T00:49:31.3954585Z           ~ update in-place
2026-09-14T00:49:31.3954883Z         
2026-09-14T00:49:31.3955202Z         Terraform will perform the following actions:
2026-09-14T00:49:31.3955604Z         
2026-09-14T00:49:31.3955988Z           # mongodbatlas_team.test will be updated in-place
2026-09-14T00:49:31.3956407Z           ~ resource "mongodbatlas_team" "test" {
2026-09-14T00:49:31.3957108Z                 id        = "aWQ=:NmFhNzQ0NmZhZjY0ODhmM2FhOTZlYWQ0-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-14T00:49:31.3957691Z                 name      = "test-acc-tf-346890631571103239"
2026-09-14T00:49:31.3958083Z               ~ usernames = [
2026-09-14T00:49:31.3958510Z                   + "andrea.angiolillo@mongodb.com",
2026-09-14T00:49:31.3958879Z                 ]
2026-09-14T00:49:31.3959252Z                 # (2 unchanged attributes hidden)
2026-09-14T00:49:31.3959578Z             }
2026-09-14T00:49:31.3959834Z         
2026-09-14T00:49:31.3960190Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-14T00:49:31.3961686Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (2.73s)
```

- 2026-09-15

### Error 2026-09-15T00:46:47+00:00
```
2026-09-15T00:46:47.8325044Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-15T00:46:47.8327538Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-15T00:46:47.8388489Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-15T00:46:47.8389221Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-15T00:46:47.8389850Z         stdout
2026-09-15T00:46:47.8390222Z         
2026-09-15T00:46:47.8391159Z         Terraform used the selected providers to generate the following execution
2026-09-15T00:46:47.8391917Z         plan. Resource actions are indicated with the following symbols:
2026-09-15T00:46:47.8392470Z           ~ update in-place
2026-09-15T00:46:47.8392877Z         
2026-09-15T00:46:47.8393338Z         Terraform will perform the following actions:
2026-09-15T00:46:47.8393804Z         
2026-09-15T00:46:47.8394318Z           # mongodbatlas_team.test will be updated in-place
2026-09-15T00:46:47.8394922Z           ~ resource "mongodbatlas_team" "test" {
2026-09-15T00:46:47.8395844Z                 id        = "aWQ=:NmFhODk1M2JmNDVlMTliMGQzZGVkNzI4-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-15T00:46:47.8396663Z                 name      = "test-acc-tf-6032184827681057376"
2026-09-15T00:46:47.8397191Z               ~ usernames = [
2026-09-15T00:46:47.8397961Z                   + "andrea.angiolillo@mongodb.com",
2026-09-15T00:46:47.8398488Z                 ]
2026-09-15T00:46:47.8399022Z                 # (2 unchanged attributes hidden)
2026-09-15T00:46:47.8399485Z             }
2026-09-15T00:46:47.8399848Z         
2026-09-15T00:46:47.8400305Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-15T00:46:47.8401763Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (2.96s)
```

- 2026-09-16

### Error 2026-09-16T00:45:24+00:00
```
2026-09-16T00:45:24.9964841Z === RUN   TestAccConfigRSTeam_updatingUsernames
2026-09-16T00:45:24.9966243Z === CONT  TestAccConfigRSTeam_updatingUsernames
2026-09-16T00:45:24.9996150Z === NAME  TestAccConfigRSTeam_updatingUsernames
2026-09-16T00:45:24.9996834Z     resource_team_test.go:128: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-16T00:45:24.9997360Z         stdout
2026-09-16T00:45:24.9997590Z         
2026-09-16T00:45:24.9998303Z         Terraform used the selected providers to generate the following execution
2026-09-16T00:45:24.9999080Z         plan. Resource actions are indicated with the following symbols:
2026-09-16T00:45:24.9999532Z           ~ update in-place
2026-09-16T00:45:24.9999799Z         
2026-09-16T00:45:25.0000288Z         Terraform will perform the following actions:
2026-09-16T00:45:25.0000622Z         
2026-09-16T00:45:25.0001020Z           # mongodbatlas_team.test will be updated in-place
2026-09-16T00:45:25.0001514Z           ~ resource "mongodbatlas_team" "test" {
2026-09-16T00:45:25.0002410Z                 id        = "aWQ=:NmFhOWU2OGIwMTNkODMxZWM0NGNlZmM4-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-16T00:45:25.0003158Z                 name      = "test-acc-tf-3199368549526748414"
2026-09-16T00:45:25.0003578Z               ~ usernames = [
2026-09-16T00:45:25.0004067Z                   + "andrea.angiolillo@mongodb.com",
2026-09-16T00:45:25.0004420Z                 ]
2026-09-16T00:45:25.0004825Z                 # (2 unchanged attributes hidden)
2026-09-16T00:45:25.0005153Z             }
2026-09-16T00:45:25.0005376Z         
2026-09-16T00:45:25.0005715Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-16T00:45:25.0015715Z   
2026-09-16T00:45:25.0025914Z --- FAIL: TestAccConfigRSTeam_updatingUsernames (3.51s)
```

- 2026-09-17 PASS 6 seconds
- 2026-09-18 PASS 10 seconds
- 2026-09-19 PASS 9 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22 PASS 8 seconds
- 2026-09-23 PASS 7 seconds
- 2026-09-24 PASS 7 seconds
- 2026-09-25 PASS 7 seconds
- 2026-09-26 PASS 8 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 6 seconds
- 2026-09-30 PASS 11 seconds
- 2026-10-01 PASS 7 seconds
- 2026-10-02 PASS 10 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 9 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 9 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 7 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 8 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 11 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
