# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2028704811492b55ff7/limits | qa | flaky_500 | 36.05s
[2025-09-14 01:13](#error-2025-09-14t0113050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c911411d835e95b5223/limits | qa | flaky_500 | 34.01s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b095d444485797b5fa35/limits | qa | flaky_500 | 32.08s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf472abd1cb41a3e70644c/limits | qa | flaky_500 | 32.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds
- 2025-09-05 PASS 7 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4450263Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-07T00:39:14.4462265Z    test_terraform_path=/home/runner/work/_temp/b6973140-fd7d-4db4-98ff-f7faa91aad51/terraform test_working_directory=/tmp/plugintest2418094550 test_step_number=2
2025-09-07T00:39:14.4463364Z     resource_project_invitation_test.go:26: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:39:14.4463835Z         
2025-09-07T00:39:14.4464211Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4464531Z         
2025-09-07T00:39:14.4464822Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4465416Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4465952Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4466239Z         
2025-09-07T00:39:14.4466679Z         error getting project (68bcd2028704811492b55ff7): error getting project's
2025-09-07T00:39:14.4467124Z         limits (68bcd2028704811492b55ff7):
2025-09-07T00:39:14.4467694Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2028704811492b55ff7/limits
2025-09-07T00:39:14.4468366Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4468930Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4469328Z         BadRequestDetail: 
2025-09-07T00:39:14.4469650Z --- FAIL: TestAccProjectRSProjectInvitation_basic (36.45s)
```

- 2025-09-08
  - PASS 7 seconds
  - PASS 14 seconds
  - PASS 7 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 8 seconds
- 2025-09-11 PASS 10 seconds
- 2025-09-12 PASS 14 seconds
- 2025-09-13 PASS 10 seconds
- 2025-09-14

### Error 2025-09-14T01:13:05+00:00
```
2025-09-14T01:13:05.0088362Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-14T01:13:05.0101197Z    test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/73b7e432-0447-480c-b92d-31107786a6db/terraform test_working_directory=/tmp/plugintest578498907
2025-09-14T01:13:05.0102329Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-14T01:13:05.0102786Z         
2025-09-14T01:13:05.0103171Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0103521Z         
2025-09-14T01:13:05.0103826Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0104577Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0105172Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0105726Z         
2025-09-14T01:13:05.0106206Z         error getting project (68c60c911411d835e95b5223): error getting project's
2025-09-14T01:13:05.0106679Z         limits (68c60c911411d835e95b5223):
2025-09-14T01:13:05.0107374Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c911411d835e95b5223/limits
2025-09-14T01:13:05.0108077Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0108682Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0109094Z         BadRequestDetail: 
2025-09-14T01:13:05.0109441Z --- FAIL: TestAccProjectRSProjectInvitation_basic (34.05s)
```

- 2025-09-15
  - PASS 7 seconds
  - FAIL 32 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6836103Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-15T07:06:19.6848802Z   
2025-09-15T07:06:19.6849257Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-15T07:06:19.6849677Z         
2025-09-15T07:06:19.6850065Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6850404Z         
2025-09-15T07:06:19.6850709Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6851309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6851855Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6852294Z         
2025-09-15T07:06:19.6852876Z         error getting project (68c7b095d444485797b5fa35): error getting project's
2025-09-15T07:06:19.6853332Z         limits (68c7b095d444485797b5fa35):
2025-09-15T07:06:19.6853906Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b095d444485797b5fa35/limits
2025-09-15T07:06:19.6854759Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6855431Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6855837Z         BadRequestDetail: 
2025-09-15T07:06:19.6856171Z --- FAIL: TestAccProjectRSProjectInvitation_basic (32.77s)
```

- 2025-09-16 PASS 12 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 10 seconds
- 2025-09-20 PASS 9 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6690064Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-21T00:45:18.6702112Z    test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/89a6487d-0ea1-444b-97d9-454f98bc7002/terraform test_working_directory=/tmp/plugintest3095877066 test_step_number=1
2025-09-21T00:45:18.6703214Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:45:18.6703625Z         
2025-09-21T00:45:18.6703990Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6704305Z         
2025-09-21T00:45:18.6704597Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6705172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6705704Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6706147Z         
2025-09-21T00:45:18.6706702Z         error getting project (68cf472abd1cb41a3e70644c): error getting project's
2025-09-21T00:45:18.6707191Z         limits (68cf472abd1cb41a3e70644c):
2025-09-21T00:45:18.6707880Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf472abd1cb41a3e70644c/limits
2025-09-21T00:45:18.6708675Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6709380Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6709770Z         BadRequestDetail: 
2025-09-21T00:45:18.6710197Z --- FAIL: TestAccProjectRSProjectInvitation_basic (32.93s)
```

- 2025-09-22 PASS 12 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 11 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 11 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 6 seconds
- 2025-09-30
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-10-01
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 7 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 12 seconds