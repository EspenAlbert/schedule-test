# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.01s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.03s
[2026-04-30 00:57](#error-2026-04-30t0057480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.08s
[2026-05-05 00:54](#error-2026-05-05t0054060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 49 seconds
- 2026-04-08 PASS 13 seconds
- 2026-04-09

### Error 2026-04-09T00:40:54+00:00
```
2026-04-09T00:40:54.6844325Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-04-09T00:40:54.6855810Z    test_working_directory=/tmp/plugintest3314826042
2026-04-09T00:40:54.6856438Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:40:54.6856902Z         
2026-04-09T00:40:54.6857609Z         Error: error creating project: test-acc-tf-p-415777571530089308
2026-04-09T00:40:54.6858010Z         
2026-04-09T00:40:54.6858316Z           with mongodbatlas_project.test,
2026-04-09T00:40:54.6858941Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:54.6859524Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:54.6859829Z         
2026-04-09T00:40:54.6860297Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:54.6860953Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:54.6861542Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:54.6861996Z --- FAIL: TestAccProjectRSProjectInvitation_basic (93.12s)
```

- 2026-04-10 PASS 9 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.4031295Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-04-11T00:48:38.4042862Z   
2026-04-11T00:48:38.4043339Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:48:38.4043790Z         
2026-04-11T00:48:38.4044219Z         Error: error creating project: test-acc-tf-p-3449188737093858351
2026-04-11T00:48:38.4044585Z         
2026-04-11T00:48:38.4044889Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.4045512Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.4046096Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.4046565Z         
2026-04-11T00:48:38.4047047Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.4047857Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.4048466Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.4048921Z --- FAIL: TestAccProjectRSProjectInvitation_basic (70.29s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 14 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 8 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 9 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 11 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 9 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 10 seconds
- 2026-04-28 PASS 15 seconds
- 2026-04-29 PASS 9 seconds
- 2026-04-30

### Error 2026-04-30T00:57:48+00:00
```
2026-04-30T00:57:48.9443919Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-04-30T00:57:48.9455643Z   
2026-04-30T00:57:48.9456137Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-30T00:57:48.9456594Z         
2026-04-30T00:57:48.9457017Z         Error: error creating project: test-acc-tf-p-7204356598859836420
2026-04-30T00:57:48.9457381Z         
2026-04-30T00:57:48.9457680Z           with mongodbatlas_project.test,
2026-04-30T00:57:48.9458291Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:48.9458861Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:48.9459174Z         
2026-04-30T00:57:48.9459655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:48.9460308Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:48.9460906Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:48.9461352Z --- FAIL: TestAccProjectRSProjectInvitation_basic (84.77s)
```

- 2026-05-01 PASS 12 seconds
- 2026-05-02 PASS 58 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 9 seconds
- 2026-05-05

### Error 2026-05-05T00:54:06+00:00
```
2026-05-05T00:54:06.7145485Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-05T00:54:06.7156412Z    test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/5107c5d7-0533-4715-8034-0a9a2558c628/terraform
2026-05-05T00:54:06.7157345Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-05T00:54:06.7157804Z         
2026-05-05T00:54:06.7158228Z         Error: error creating project: test-acc-tf-p-4472434900693493754
2026-05-05T00:54:06.7158832Z         
2026-05-05T00:54:06.7159153Z           with mongodbatlas_project.test,
2026-05-05T00:54:06.7159793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:54:06.7160384Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:54:06.7160687Z         
2026-05-05T00:54:06.7161169Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:54:06.7161842Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:54:06.7162447Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:06.7163030Z --- FAIL: TestAccProjectRSProjectInvitation_basic (75.65s)
```

- 2026-05-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 8 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
