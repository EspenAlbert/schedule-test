# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-04-14 00:55](#error-2026-04-14t0055030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-04-18 00:47](#error-2026-04-18t0047200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.02s
[2026-04-30 00:57](#error-2026-04-30t0057480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-05-05 00:54](#error-2026-05-05t0054060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:42+00:00
```
2026-04-07T00:51:42.4115318Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-04-07T00:51:42.4126351Z    test_name=TestAccProjectDSProjectInvitation_basic test_step_number=1
2026-04-07T00:51:42.4127037Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-07T00:51:42.4127490Z         
2026-04-07T00:51:42.4128211Z         Error: error creating project: test-acc-tf-p-4002831485019857951
2026-04-07T00:51:42.4128594Z         
2026-04-07T00:51:42.4128896Z           with mongodbatlas_project.test,
2026-04-07T00:51:42.4129661Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-07T00:51:42.4130313Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:51:42.4130700Z         
2026-04-07T00:51:42.4131172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:42.4131970Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:42.4132576Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4133016Z --- FAIL: TestAccProjectDSProjectInvitation_basic (73.48s)
```

- 2026-04-08 PASS 7 seconds
- 2026-04-09 PASS 54 seconds
- 2026-04-10 PASS 9 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.4013495Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-04-11T00:48:38.4024302Z    test_name=TestAccProjectDSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/71ebc6a1-b94f-4256-b38b-67bad75d3989/terraform test_working_directory=/tmp/plugintest1525082881
2026-04-11T00:48:38.4025423Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:48:38.4025890Z         
2026-04-11T00:48:38.4026322Z         Error: error creating project: test-acc-tf-p-5773556150389902252
2026-04-11T00:48:38.4026696Z         
2026-04-11T00:48:38.4027005Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.4027756Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.4028357Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.4028669Z         
2026-04-11T00:48:38.4029155Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.4029819Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.4030423Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.4030886Z --- FAIL: TestAccProjectDSProjectInvitation_basic (71.50s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14

### Error 2026-04-14T00:55:03+00:00
```
2026-04-14T00:55:03.8223819Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-04-14T00:55:03.8234406Z    test_terraform_path=/home/runner/work/_temp/c8ab69df-7031-41e2-99de-2a68dcfc22c1/terraform test_working_directory=/tmp/plugintest2297202856 test_step_number=1
2026-04-14T00:55:03.8235411Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-14T00:55:03.8235874Z         
2026-04-14T00:55:03.8236280Z         Error: error creating project: test-acc-tf-p-823588747570009158
2026-04-14T00:55:03.8236638Z         
2026-04-14T00:55:03.8236935Z           with mongodbatlas_project.test,
2026-04-14T00:55:03.8237538Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-14T00:55:03.8238105Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-14T00:55:03.8238549Z         
2026-04-14T00:55:03.8239021Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-14T00:55:03.8239674Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-14T00:55:03.8240267Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:55:03.8240858Z --- FAIL: TestAccProjectDSProjectInvitation_basic (63.57s)
```

- 2026-04-15 PASS 5 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 6 seconds
- 2026-04-18

### Error 2026-04-18T00:47:20+00:00
```
2026-04-18T00:47:20.3159105Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-04-18T00:47:20.3167725Z    test_terraform_path=/home/runner/work/_temp/2016261e-e5a9-44e3-988c-b4fe6961e6eb/terraform test_working_directory=/tmp/plugintest2291654413 test_name=TestAccProjectDSProjectInvitation_basic
2026-04-18T00:47:20.3168596Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-18T00:47:20.3168972Z         
2026-04-18T00:47:20.3169519Z         Error: error creating project: test-acc-tf-p-3910677037855258905
2026-04-18T00:47:20.3169818Z         
2026-04-18T00:47:20.3170068Z           with mongodbatlas_project.test,
2026-04-18T00:47:20.3170565Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:20.3171017Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:20.3171254Z         
2026-04-18T00:47:20.3171625Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:20.3172130Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:20.3172586Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:20.3172936Z --- FAIL: TestAccProjectDSProjectInvitation_basic (87.19s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 40 seconds
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS 59 seconds
- 2026-04-24 PASS 7 seconds
- 2026-04-25 PASS 43 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 7 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 6 seconds
- 2026-04-30

### Error 2026-04-30T00:57:48+00:00
```
2026-04-30T00:57:48.9425487Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-04-30T00:57:48.9436600Z    test_terraform_path=/home/runner/work/_temp/d3eee8a8-ecff-476a-b07a-109bf74a6b5f/terraform test_working_directory=/tmp/plugintest2513937926
2026-04-30T00:57:48.9437547Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-30T00:57:48.9438027Z         
2026-04-30T00:57:48.9438708Z         Error: error creating project: test-acc-tf-p-8131361606158456395
2026-04-30T00:57:48.9439084Z         
2026-04-30T00:57:48.9439387Z           with mongodbatlas_project.test,
2026-04-30T00:57:48.9440001Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:48.9440588Z           13: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:48.9440897Z         
2026-04-30T00:57:48.9441369Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:48.9442411Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:48.9443049Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:48.9443509Z --- FAIL: TestAccProjectDSProjectInvitation_basic (72.31s)
```

- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 34 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 9 seconds
- 2026-05-05

### Error 2026-05-05T00:54:06+00:00
```
2026-05-05T00:54:06.7123296Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-05T00:54:06.7138821Z   
2026-05-05T00:54:06.7139477Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-05T00:54:06.7140068Z         
2026-05-05T00:54:06.7140594Z         Error: error creating project: test-acc-tf-p-150826728690448717
2026-05-05T00:54:06.7141000Z         
2026-05-05T00:54:06.7141316Z           with mongodbatlas_project.test,
2026-05-05T00:54:06.7141950Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-05T00:54:06.7142540Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:54:06.7142847Z         
2026-05-05T00:54:06.7143330Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:54:06.7143989Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:54:06.7144612Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:06.7145073Z --- FAIL: TestAccProjectDSProjectInvitation_basic (80.87s)
```

- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 5 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 9 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 seconds
- 2026-05-04 PASS 7 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 5 seconds
