# config/team/TestAccConfigRSTeam_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) |  | dev | 3.08s
[2026-09-11 00:45](#error-2026-09-11t0045530000) |  | dev | 4.00s
[2026-09-11 06:44](#error-2026-09-11t0644330000) |  | dev | 3.09s
[2026-09-12 00:44](#error-2026-09-12t0044110000) |  | dev | 2.07s
[2026-09-14 00:49](#error-2026-09-14t0049310000) |  | dev | 2.07s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 5 seconds
- 2026-09-09 PASS 7 seconds
- 2026-09-10
  - PASS 7 seconds
  - FAIL 3 seconds

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4613438Z === RUN   TestAccConfigRSTeam_basic
2026-09-10T17:00:43.4618562Z === CONT  TestAccConfigRSTeam_basic
2026-09-10T17:00:43.4628866Z    test_terraform_path=/home/runner/work/_temp/61fe472c-6b87-451e-bcf9-5d2dde06f66c/terraform test_working_directory=/tmp/plugintest4287689877 test_name=TestAccConfigDSTeam_basic
2026-09-10T17:00:43.4658533Z === NAME  TestAccConfigRSTeam_basic
2026-09-10T17:00:43.4659241Z     resource_team_test.go:74: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-10T17:00:43.4659780Z         stdout
2026-09-10T17:00:43.4660027Z         
2026-09-10T17:00:43.4660772Z         Terraform used the selected providers to generate the following execution
2026-09-10T17:00:43.4661447Z         plan. Resource actions are indicated with the following symbols:
2026-09-10T17:00:43.4662066Z           ~ update in-place
2026-09-10T17:00:43.4662357Z         
2026-09-10T17:00:43.4662731Z         Terraform will perform the following actions:
2026-09-10T17:00:43.4663064Z         
2026-09-10T17:00:43.4663475Z           # mongodbatlas_team.test will be updated in-place
2026-09-10T17:00:43.4663983Z           ~ resource "mongodbatlas_team" "test" {
2026-09-10T17:00:43.4664907Z                 id        = "aWQ=:NmFhMmUyMThiMmZlMmJkZTQ3ZmY1M2Vi-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-10T17:00:43.4665678Z                 name      = "test-acc-tf-4830280823213162726"
2026-09-10T17:00:43.4666241Z               ~ usernames = [
2026-09-10T17:00:43.4666743Z                   + "andrea.angiolillo@mongodb.com",
2026-09-10T17:00:43.4667112Z                 ]
2026-09-10T17:00:43.4667538Z                 # (2 unchanged attributes hidden)
2026-09-10T17:00:43.4667873Z             }
2026-09-10T17:00:43.4668114Z         
2026-09-10T17:00:43.4668539Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-10T17:00:43.4679201Z   
2026-09-10T17:00:43.4706196Z --- FAIL: TestAccConfigRSTeam_basic (3.76s)
```

- 2026-09-11
  - FAIL 4 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7880190Z === RUN   TestAccConfigRSTeam_basic
2026-09-11T00:45:53.7882606Z === CONT  TestAccConfigRSTeam_basic
2026-09-11T00:45:53.7887991Z    test_name=TestAccConfigDSTeam_basic
2026-09-11T00:45:53.7903936Z === NAME  TestAccConfigRSTeam_basic
2026-09-11T00:45:53.7904431Z     resource_team_test.go:74: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-11T00:45:53.7904951Z         stdout
2026-09-11T00:45:53.7905216Z         
2026-09-11T00:45:53.7905782Z         Terraform used the selected providers to generate the following execution
2026-09-11T00:45:53.7906281Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T00:45:53.7906800Z           ~ update in-place
2026-09-11T00:45:53.7907030Z         
2026-09-11T00:45:53.7907317Z         Terraform will perform the following actions:
2026-09-11T00:45:53.7907585Z         
2026-09-11T00:45:53.7907902Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T00:45:53.7908281Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T00:45:53.7908954Z                 id        = "aWQ=:NmFhMzRlZTNiNWQ3ZWRhNzRmN2VkM2E2-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T00:45:53.7909547Z                 name      = "test-acc-tf-8656262149130457677"
2026-09-11T00:45:53.7909869Z               ~ usernames = [
2026-09-11T00:45:53.7910252Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T00:45:53.7910533Z                 ]
2026-09-11T00:45:53.7910847Z                 # (2 unchanged attributes hidden)
2026-09-11T00:45:53.7911100Z             }
2026-09-11T00:45:53.7911287Z         
2026-09-11T00:45:53.7911565Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T00:45:53.7919262Z    test_terraform_path=/home/runner/work/_temp/598c1684-2cdf-49a4-bb3c-1e080029faa7/terraform test_working_directory=/tmp/plugintest3919937293 test_name=TestAccConfigRSTeam_updatingUsernames test_step_number=1
2026-09-11T00:45:53.7928809Z --- FAIL: TestAccConfigRSTeam_basic (4.04s)
```

  - FAIL 3 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8716804Z === RUN   TestAccConfigRSTeam_basic
2026-09-11T06:44:33.8718845Z === CONT  TestAccConfigRSTeam_basic
2026-09-11T06:44:33.8767844Z === NAME  TestAccConfigRSTeam_basic
2026-09-11T06:44:33.8768495Z     resource_team_test.go:74: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-11T06:44:33.8769054Z         stdout
2026-09-11T06:44:33.8769288Z         
2026-09-11T06:44:33.8770125Z         Terraform used the selected providers to generate the following execution
2026-09-11T06:44:33.8770791Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T06:44:33.8771245Z           ~ update in-place
2026-09-11T06:44:33.8771510Z         
2026-09-11T06:44:33.8771879Z         Terraform will perform the following actions:
2026-09-11T06:44:33.8772210Z         
2026-09-11T06:44:33.8772607Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T06:44:33.8773387Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T06:44:33.8774467Z                 id        = "aWQ=:NmFhM2EzMzlmN2ZjYzRiYmViZjY3ZWVj-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T06:44:33.8775261Z                 name      = "test-acc-tf-2494463374806514377"
2026-09-11T06:44:33.8775686Z               ~ usernames = [
2026-09-11T06:44:33.8776178Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T06:44:33.8776540Z                 ]
2026-09-11T06:44:33.8776947Z                 # (2 unchanged attributes hidden)
2026-09-11T06:44:33.8777280Z             }
2026-09-11T06:44:33.8777511Z         
2026-09-11T06:44:33.8777856Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T06:44:33.8779409Z --- FAIL: TestAccConfigRSTeam_basic (3.91s)
```

- 2026-09-12

### Error 2026-09-12T00:44:11+00:00
```
2026-09-12T00:44:11.6706318Z === RUN   TestAccConfigRSTeam_basic
2026-09-12T00:44:11.6708393Z === CONT  TestAccConfigRSTeam_basic
2026-09-12T00:44:11.6753519Z === NAME  TestAccConfigRSTeam_basic
2026-09-12T00:44:11.6754030Z     resource_team_test.go:74: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-12T00:44:11.6754447Z         stdout
2026-09-12T00:44:11.6754647Z         
2026-09-12T00:44:11.6755221Z         Terraform used the selected providers to generate the following execution
2026-09-12T00:44:11.6755726Z         plan. Resource actions are indicated with the following symbols:
2026-09-12T00:44:11.6756084Z           ~ update in-place
2026-09-12T00:44:11.6756314Z         
2026-09-12T00:44:11.6756605Z         Terraform will perform the following actions:
2026-09-12T00:44:11.6756874Z         
2026-09-12T00:44:11.6757190Z           # mongodbatlas_team.test will be updated in-place
2026-09-12T00:44:11.6757571Z           ~ resource "mongodbatlas_team" "test" {
2026-09-12T00:44:11.6758247Z                 id        = "aWQ=:NmFhNGEwMTMxMzI5YjdmODE0NGVkNjQ2-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-12T00:44:11.6758824Z                 name      = "test-acc-tf-2162422504489126764"
2026-09-12T00:44:11.6759154Z               ~ usernames = [
2026-09-12T00:44:11.6759654Z                   + "andrea.angiolillo@mongodb.com",
2026-09-12T00:44:11.6759941Z                 ]
2026-09-12T00:44:11.6760399Z                 # (2 unchanged attributes hidden)
2026-09-12T00:44:11.6760667Z             }
2026-09-12T00:44:11.6760860Z         
2026-09-12T00:44:11.6761136Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-12T00:44:11.6762346Z --- FAIL: TestAccConfigRSTeam_basic (2.70s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3906541Z === RUN   TestAccConfigRSTeam_basic
2026-09-14T00:49:31.3909280Z === CONT  TestAccConfigRSTeam_basic
2026-09-14T00:49:31.3933226Z === NAME  TestAccConfigRSTeam_basic
2026-09-14T00:49:31.3933753Z     resource_team_test.go:74: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-14T00:49:31.3934221Z         stdout
2026-09-14T00:49:31.3934582Z         
2026-09-14T00:49:31.3935299Z         Terraform used the selected providers to generate the following execution
2026-09-14T00:49:31.3935849Z         plan. Resource actions are indicated with the following symbols:
2026-09-14T00:49:31.3936239Z           ~ update in-place
2026-09-14T00:49:31.3936541Z         
2026-09-14T00:49:31.3936886Z         Terraform will perform the following actions:
2026-09-14T00:49:31.3937225Z         
2026-09-14T00:49:31.3937587Z           # mongodbatlas_team.test will be updated in-place
2026-09-14T00:49:31.3938049Z           ~ resource "mongodbatlas_team" "test" {
2026-09-14T00:49:31.3938694Z                 id        = "aWQ=:NmFhNzQ0NmZkNGUyYjBlY2JkNWI0YWYw-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-14T00:49:31.3939350Z                 name      = "test-acc-tf-942785511776130456"
2026-09-14T00:49:31.3939725Z               ~ usernames = [
2026-09-14T00:49:31.3940203Z                   + "andrea.angiolillo@mongodb.com",
2026-09-14T00:49:31.3940581Z                 ]
2026-09-14T00:49:31.3940950Z                 # (2 unchanged attributes hidden)
2026-09-14T00:49:31.3941271Z             }
2026-09-14T00:49:31.3941552Z         
2026-09-14T00:49:31.3941887Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-14T00:49:31.3951133Z    test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform
2026-09-14T00:49:31.3961292Z --- FAIL: TestAccConfigRSTeam_basic (2.69s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 8 seconds
- 2026-09-14: MISSING
