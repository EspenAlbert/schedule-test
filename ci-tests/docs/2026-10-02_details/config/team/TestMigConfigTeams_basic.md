# config/team/TestMigConfigTeams_basic Test Details
# Found 24 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 19) FAIL(x 5)
Success rate: 79.17%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) |  | dev | 4.05s
[2026-09-11 00:45](#error-2026-09-11t0045530000) |  | dev | 5.02s
[2026-09-11 06:44](#error-2026-09-11t0644330000) |  | dev | 6.02s
[2026-09-14 00:49](#error-2026-09-14t0049310000) |  | dev | 5.00s
[2026-09-16 00:45](#error-2026-09-16t0045240000) |  | dev | 5.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 7 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 5 seconds
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 7 seconds
- 2026-09-08: MISSING
- 2026-09-09 PASS 5 seconds
- 2026-09-10

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4548890Z === RUN   TestMigConfigTeams_basic
2026-09-10T17:00:43.4563946Z    test_working_directory=/tmp/plugintest1998654652
2026-09-10T17:00:43.4565122Z     resource_team_migration_test.go:23: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-10T17:00:43.4566167Z         stdout
2026-09-10T17:00:43.4566532Z         
2026-09-10T17:00:43.4567658Z         Terraform used the selected providers to generate the following execution
2026-09-10T17:00:43.4568706Z         plan. Resource actions are indicated with the following symbols:
2026-09-10T17:00:43.4569410Z           ~ update in-place
2026-09-10T17:00:43.4569847Z         
2026-09-10T17:00:43.4570415Z         Terraform will perform the following actions:
2026-09-10T17:00:43.4570931Z         
2026-09-10T17:00:43.4571564Z           # mongodbatlas_team.test will be updated in-place
2026-09-10T17:00:43.4572328Z           ~ resource "mongodbatlas_team" "test" {
2026-09-10T17:00:43.4573826Z                 id        = "aWQ=:NmFhMmUyMTA4YjE3OTEwNjBlMWM5ODU1-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-10T17:00:43.4575047Z                 name      = "test-acc-tf-4130203578214138749"
2026-09-10T17:00:43.4575853Z               ~ usernames = [
2026-09-10T17:00:43.4576628Z                   + "andrea.angiolillo@mongodb.com",
2026-09-10T17:00:43.4577355Z                 ]
2026-09-10T17:00:43.4578029Z                 # (2 unchanged attributes hidden)
2026-09-10T17:00:43.4578544Z             }
2026-09-10T17:00:43.4578888Z         
2026-09-10T17:00:43.4579422Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-10T17:00:43.4579970Z --- FAIL: TestMigConfigTeams_basic (4.49s)
```

- 2026-09-11
  - FAIL 5 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7847103Z === RUN   TestMigConfigTeams_basic
2026-09-11T00:45:53.7855138Z   
2026-09-11T00:45:53.7855620Z     resource_team_migration_test.go:23: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-11T00:45:53.7856053Z         stdout
2026-09-11T00:45:53.7856262Z         
2026-09-11T00:45:53.7857042Z         Terraform used the selected providers to generate the following execution
2026-09-11T00:45:53.7857552Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T00:45:53.7858013Z           ~ update in-place
2026-09-11T00:45:53.7858232Z         
2026-09-11T00:45:53.7858521Z         Terraform will perform the following actions:
2026-09-11T00:45:53.7858786Z         
2026-09-11T00:45:53.7859099Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T00:45:53.7859475Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T00:45:53.7860145Z                 id        = "aWQ=:NmFhMzRlZGFiNWQ3ZWRhNzRmN2VjZmQ3-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T00:45:53.7860715Z                 name      = "test-acc-tf-5602408215613237619"
2026-09-11T00:45:53.7861041Z               ~ usernames = [
2026-09-11T00:45:53.7861416Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T00:45:53.7861695Z                 ]
2026-09-11T00:45:53.7862020Z                 # (2 unchanged attributes hidden)
2026-09-11T00:45:53.7862279Z             }
2026-09-11T00:45:53.7862469Z         
2026-09-11T00:45:53.7862746Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T00:45:53.7863026Z --- FAIL: TestMigConfigTeams_basic (5.16s)
```

  - FAIL 6 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8674479Z === RUN   TestMigConfigTeams_basic
2026-09-11T06:44:33.8684696Z   
2026-09-11T06:44:33.8685318Z     resource_team_migration_test.go:23: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-11T06:44:33.8685912Z         stdout
2026-09-11T06:44:33.8686151Z         
2026-09-11T06:44:33.8686867Z         Terraform used the selected providers to generate the following execution
2026-09-11T06:44:33.8687543Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T06:44:33.8688143Z           ~ update in-place
2026-09-11T06:44:33.8688416Z         
2026-09-11T06:44:33.8688781Z         Terraform will perform the following actions:
2026-09-11T06:44:33.8689115Z         
2026-09-11T06:44:33.8689630Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T06:44:33.8690132Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T06:44:33.8691020Z                 id        = "aWQ=:NmFhM2EzMmRmN2ZjYzRiYmViZjY3YjQ0-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T06:44:33.8691769Z                 name      = "test-acc-tf-1728947304495371510"
2026-09-11T06:44:33.8692189Z               ~ usernames = [
2026-09-11T06:44:33.8692683Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T06:44:33.8693045Z                 ]
2026-09-11T06:44:33.8693453Z                 # (2 unchanged attributes hidden)
2026-09-11T06:44:33.8693780Z             }
2026-09-11T06:44:33.8694004Z         
2026-09-11T06:44:33.8694356Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T06:44:33.8694717Z --- FAIL: TestMigConfigTeams_basic (6.22s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3868479Z === RUN   TestMigConfigTeams_basic
2026-09-14T00:49:31.3877381Z    test_name=TestMigConfigTeams_basic test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform
2026-09-14T00:49:31.3878198Z     resource_team_migration_test.go:23: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-14T00:49:31.3878687Z         stdout
2026-09-14T00:49:31.3878972Z         
2026-09-14T00:49:31.3879690Z         Terraform used the selected providers to generate the following execution
2026-09-14T00:49:31.3880219Z         plan. Resource actions are indicated with the following symbols:
2026-09-14T00:49:31.3880631Z           ~ update in-place
2026-09-14T00:49:31.3880916Z         
2026-09-14T00:49:31.3881332Z         Terraform will perform the following actions:
2026-09-14T00:49:31.3881632Z         
2026-09-14T00:49:31.3882010Z           # mongodbatlas_team.test will be updated in-place
2026-09-14T00:49:31.3882446Z           ~ resource "mongodbatlas_team" "test" {
2026-09-14T00:49:31.3883125Z                 id        = "aWQ=:NmFhNzQ0NjdkNGUyYjBlY2JkNWI0OGI3-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-14T00:49:31.3883745Z                 name      = "test-acc-tf-8896258521369021226"
2026-09-14T00:49:31.3884124Z               ~ usernames = [
2026-09-14T00:49:31.3884783Z                   + "andrea.angiolillo@mongodb.com",
2026-09-14T00:49:31.3885153Z                 ]
2026-09-14T00:49:31.3885538Z                 # (2 unchanged attributes hidden)
2026-09-14T00:49:31.3885870Z             }
2026-09-14T00:49:31.3886135Z         
2026-09-14T00:49:31.3886483Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-14T00:49:31.3886830Z --- FAIL: TestMigConfigTeams_basic (5.01s)
```

- 2026-09-15: MISSING
- 2026-09-16

### Error 2026-09-16T00:45:24+00:00
```
2026-09-16T00:45:24.9922668Z === RUN   TestMigConfigTeams_basic
2026-09-16T00:45:24.9932759Z   
2026-09-16T00:45:24.9933378Z     resource_team_migration_test.go:23: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-16T00:45:24.9933949Z         stdout
2026-09-16T00:45:24.9934177Z         
2026-09-16T00:45:24.9934889Z         Terraform used the selected providers to generate the following execution
2026-09-16T00:45:24.9935551Z         plan. Resource actions are indicated with the following symbols:
2026-09-16T00:45:24.9936007Z           ~ update in-place
2026-09-16T00:45:24.9936276Z         
2026-09-16T00:45:24.9936635Z         Terraform will perform the following actions:
2026-09-16T00:45:24.9937091Z         
2026-09-16T00:45:24.9937497Z           # mongodbatlas_team.test will be updated in-place
2026-09-16T00:45:24.9937989Z           ~ resource "mongodbatlas_team" "test" {
2026-09-16T00:45:24.9939020Z                 id        = "aWQ=:NmFhOWU2ODIwMTNkODMxZWM0NGNkOGVl-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-16T00:45:24.9939781Z                 name      = "test-acc-tf-1839778973355801595"
2026-09-16T00:45:24.9940201Z               ~ usernames = [
2026-09-16T00:45:24.9940695Z                   + "andrea.angiolillo@mongodb.com",
2026-09-16T00:45:24.9941053Z                 ]
2026-09-16T00:45:24.9941458Z                 # (2 unchanged attributes hidden)
2026-09-16T00:45:24.9941788Z             }
2026-09-16T00:45:24.9942011Z         
2026-09-16T00:45:24.9942353Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-16T00:45:24.9942710Z --- FAIL: TestMigConfigTeams_basic (5.26s)
```

- 2026-09-17: MISSING
- 2026-09-18 PASS 7 seconds
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22: MISSING
- 2026-09-23 PASS 5 seconds
- 2026-09-24: MISSING
- 2026-09-25 PASS 5 seconds
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 6 seconds
- 2026-09-29: MISSING
- 2026-09-30 PASS 6 seconds
- 2026-10-01: MISSING
- 2026-10-02 PASS 7 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 7 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 6 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 5 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 7 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
