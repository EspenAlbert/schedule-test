# config/team/TestMigConfigTeams_usernamesDeprecation Test Details
# Found 6 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 4) PASS(x 2)
Success rate: 33.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) |  | dev | 4.02s
[2026-09-11 00:45](#error-2026-09-11t0045530000) |  | dev | 4.08s
[2026-09-11 06:44](#error-2026-09-11t0644330000) |  | dev | 6.05s
[2026-09-14 00:49](#error-2026-09-14t0049310000) |  | dev | 4.01s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 7 seconds
- 2026-09-10

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4580533Z === RUN   TestMigConfigTeams_usernamesDeprecation
2026-09-10T17:00:43.4596025Z    test_name=TestMigConfigTeams_usernamesDeprecation
2026-09-10T17:00:43.4597205Z     resource_team_migration_test.go:51: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-10T17:00:43.4598093Z         stdout
2026-09-10T17:00:43.4598441Z         
2026-09-10T17:00:43.4599591Z         Terraform used the selected providers to generate the following execution
2026-09-10T17:00:43.4600643Z         plan. Resource actions are indicated with the following symbols:
2026-09-10T17:00:43.4601347Z           ~ update in-place
2026-09-10T17:00:43.4601775Z         
2026-09-10T17:00:43.4602337Z         Terraform will perform the following actions:
2026-09-10T17:00:43.4602851Z         
2026-09-10T17:00:43.4603487Z           # mongodbatlas_team.test will be updated in-place
2026-09-10T17:00:43.4604260Z           ~ resource "mongodbatlas_team" "test" {
2026-09-10T17:00:43.4605885Z                 id        = "aWQ=:NmFhMmUyMTRiMmZlMmJkZTQ3ZmY1MzAz-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-10T17:00:43.4607097Z                 name      = "test-acc-tf-8455016127908148467"
2026-09-10T17:00:43.4607745Z               ~ usernames = [
2026-09-10T17:00:43.4608530Z                   + "andrea.angiolillo@mongodb.com",
2026-09-10T17:00:43.4609077Z                 ]
2026-09-10T17:00:43.4609718Z                 # (2 unchanged attributes hidden)
2026-09-10T17:00:43.4610208Z             }
2026-09-10T17:00:43.4610553Z         
2026-09-10T17:00:43.4611071Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-10T17:00:43.4611702Z --- FAIL: TestMigConfigTeams_usernamesDeprecation (4.16s)
```

- 2026-09-11
  - FAIL 4 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7863315Z === RUN   TestMigConfigTeams_usernamesDeprecation
2026-09-11T00:45:53.7871470Z   
2026-09-11T00:45:53.7871956Z     resource_team_migration_test.go:51: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-11T00:45:53.7872390Z         stdout
2026-09-11T00:45:53.7872585Z         
2026-09-11T00:45:53.7873142Z         Terraform used the selected providers to generate the following execution
2026-09-11T00:45:53.7873642Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T00:45:53.7873998Z           ~ update in-place
2026-09-11T00:45:53.7874214Z         
2026-09-11T00:45:53.7874500Z         Terraform will perform the following actions:
2026-09-11T00:45:53.7874766Z         
2026-09-11T00:45:53.7875080Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T00:45:53.7875453Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T00:45:53.7876122Z                 id        = "aWQ=:NmFhMzRlZGYxNzYxNzg3ZWNiZTM4YzZh-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T00:45:53.7876951Z                 name      = "test-acc-tf-2951140115853405268"
2026-09-11T00:45:53.7877292Z               ~ usernames = [
2026-09-11T00:45:53.7877673Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T00:45:53.7877955Z                 ]
2026-09-11T00:45:53.7878273Z                 # (2 unchanged attributes hidden)
2026-09-11T00:45:53.7878535Z             }
2026-09-11T00:45:53.7878720Z         
2026-09-11T00:45:53.7878998Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T00:45:53.7879316Z --- FAIL: TestMigConfigTeams_usernamesDeprecation (4.77s)
```

  - FAIL 6 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8695085Z === RUN   TestMigConfigTeams_usernamesDeprecation
2026-09-11T06:44:33.8705562Z   
2026-09-11T06:44:33.8706190Z     resource_team_migration_test.go:51: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-11T06:44:33.8706755Z         stdout
2026-09-11T06:44:33.8706985Z         
2026-09-11T06:44:33.8707708Z         Terraform used the selected providers to generate the following execution
2026-09-11T06:44:33.8708357Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T06:44:33.8708810Z           ~ update in-place
2026-09-11T06:44:33.8709080Z         
2026-09-11T06:44:33.8709442Z         Terraform will perform the following actions:
2026-09-11T06:44:33.8710047Z         
2026-09-11T06:44:33.8710448Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T06:44:33.8710938Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T06:44:33.8711822Z                 id        = "aWQ=:NmFhM2EzMzRmN2ZjYzRiYmViZjY3Y2Jh-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T06:44:33.8712586Z                 name      = "test-acc-tf-1131846364030691182"
2026-09-11T06:44:33.8713131Z               ~ usernames = [
2026-09-11T06:44:33.8713619Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T06:44:33.8713978Z                 ]
2026-09-11T06:44:33.8714375Z                 # (2 unchanged attributes hidden)
2026-09-11T06:44:33.8714702Z             }
2026-09-11T06:44:33.8714929Z         
2026-09-11T06:44:33.8715269Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T06:44:33.8715675Z --- FAIL: TestMigConfigTeams_usernamesDeprecation (6.52s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3887173Z === RUN   TestMigConfigTeams_usernamesDeprecation
2026-09-14T00:49:31.3896112Z    test_name=TestMigConfigTeams_usernamesDeprecation test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform
2026-09-14T00:49:31.3896906Z     resource_team_migration_test.go:51: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2026-09-14T00:49:31.3897391Z         stdout
2026-09-14T00:49:31.3897665Z         
2026-09-14T00:49:31.3898380Z         Terraform used the selected providers to generate the following execution
2026-09-14T00:49:31.3898906Z         plan. Resource actions are indicated with the following symbols:
2026-09-14T00:49:31.3899319Z           ~ update in-place
2026-09-14T00:49:31.3899607Z         
2026-09-14T00:49:31.3899983Z         Terraform will perform the following actions:
2026-09-14T00:49:31.3900298Z         
2026-09-14T00:49:31.3900745Z           # mongodbatlas_team.test will be updated in-place
2026-09-14T00:49:31.3901229Z           ~ resource "mongodbatlas_team" "test" {
2026-09-14T00:49:31.3901938Z                 id        = "aWQ=:NmFhNzQ0NmM1NTlhYjE1OGE4MzRkZjU5-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-14T00:49:31.3902518Z                 name      = "test-acc-tf-2292372062651882436"
2026-09-14T00:49:31.3902906Z               ~ usernames = [
2026-09-14T00:49:31.3903331Z                   + "andrea.angiolillo@mongodb.com",
2026-09-14T00:49:31.3903694Z                 ]
2026-09-14T00:49:31.3904070Z                 # (2 unchanged attributes hidden)
2026-09-14T00:49:31.3904468Z             }
2026-09-14T00:49:31.3904710Z         
2026-09-14T00:49:31.3905080Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-14T00:49:31.3905449Z --- FAIL: TestMigConfigTeams_usernamesDeprecation (4.09s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 9 seconds
- 2026-09-14: MISSING
