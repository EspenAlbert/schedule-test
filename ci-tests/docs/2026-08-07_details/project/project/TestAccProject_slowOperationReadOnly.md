# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 12)
Success rate: 67.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5191ac8329995c4c767646/apiKeys/6765a80fde4acf1ea6a15afe | dev |  | 66.02s
[2026-07-13 00:55](#error-2026-07-13t0055080000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5435b6af6217b2f52c290f/apiKeys/6765a80fde4acf1ea6a15afe | dev |  | 11.05s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5585b436f430f45f9d1ac9/apiKeys/6765a80fde4acf1ea6a15afe | dev |  | 81.06s
[2026-07-15 00:47](#error-2026-07-15t0047540000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a56d6cbda89dc2e583fd5dd/apiKeys/6765a80fde4acf1ea6a15afe | dev |  | 12.03s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5829069bd40d6f4026809d/apiKeys/6765a80fde4acf1ea6a15afe | dev |  | 91.07s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.06s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8542835Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-09T01:01:39.8546578Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-09T01:01:39.8601195Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-09T01:01:39.8602268Z     resource_project_test.go:1171: Step 1/4 error: Error running apply: exit status 1
2026-07-09T01:01:39.8603042Z         
2026-07-09T01:01:39.8604106Z         Error: error creating project: test-acc-tf-p-2011457264699429809
2026-07-09T01:01:39.8604785Z         
2026-07-09T01:01:39.8605362Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8606543Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8607617Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8608184Z         
2026-07-09T01:01:39.8609088Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8609863Z         type
2026-07-09T01:01:39.8620007Z    test_terraform_path=/home/runner/work/_temp/730259b6-b07f-4b86-aed8-1a3c54b25f50/terraform test_working_directory=/tmp/plugintest2214771558
2026-07-09T01:01:39.8710622Z --- FAIL: TestAccProject_slowOperationReadOnly (54.22s)
```

- 2026-07-10 PASS 20 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5470001Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-11T00:54:38.5474308Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-11T00:54:38.5511155Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-11T00:54:38.5514523Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5191ac8329995c4c767646/apiKeys/6765a80fde4acf1ea6a15afe PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a80fde4acf1ea6a15afe exists. Reason: Bad Request. Params: [6765a80fde4acf1ea6a15afe], BadRequestDetail: 
2026-07-11T00:54:38.5538030Z    test_terraform_path=/home/runner/work/_temp/dce4fb13-314b-4087-8e22-7e2b5b89b3c2/terraform test_working_directory=/tmp/plugintest2120587827
2026-07-11T00:54:38.5539714Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-11T00:54:38.5540536Z         
2026-07-11T00:54:38.5541181Z         Error: error when getting project from Atlas
2026-07-11T00:54:38.5541753Z         
2026-07-11T00:54:38.5542318Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5543477Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5544544Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5545105Z         
2026-07-11T00:54:38.5545743Z         error getting project (6a5191ac8329995c4c767646):
2026-07-11T00:54:38.5546838Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5191ac8329995c4c767646
2026-07-11T00:54:38.5548344Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-11T00:54:38.5549492Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-11T00:54:38.5550260Z         BadRequestDetail: 
2026-07-11T00:54:38.5570707Z   
2026-07-11T00:54:38.5571636Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-11T00:54:38.5572499Z         
2026-07-11T00:54:38.5573068Z         Error: error when destroying resource
2026-07-11T00:54:38.5573591Z         
2026-07-11T00:54:38.5574242Z         error deleting project (6a5191ac8329995c4c767646):
2026-07-11T00:54:38.5575383Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5191ac8329995c4c767646
2026-07-11T00:54:38.5576639Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-11T00:54:38.5578139Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-11T00:54:38.5578990Z         BadRequestDetail: 
2026-07-11T00:54:38.5579573Z --- FAIL: TestAccProject_slowOperationReadOnly (66.19s)
```

- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T00:55:08+00:00
```
2026-07-13T00:55:08.5236917Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-13T00:55:08.5242346Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-13T00:55:08.5263410Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-13T00:55:08.5266913Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5435b6af6217b2f52c290f/apiKeys/6765a80fde4acf1ea6a15afe PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a80fde4acf1ea6a15afe exists. Reason: Bad Request. Params: [6765a80fde4acf1ea6a15afe], BadRequestDetail: 
2026-07-13T00:55:08.5291333Z   
2026-07-13T00:55:08.5292378Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-13T00:55:08.5293237Z         
2026-07-13T00:55:08.5293868Z         Error: error when getting project from Atlas
2026-07-13T00:55:08.5294454Z         
2026-07-13T00:55:08.5295055Z           with mongodbatlas_project.test,
2026-07-13T00:55:08.5296216Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-13T00:55:08.5297573Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-13T00:55:08.5298177Z         
2026-07-13T00:55:08.5298863Z         error getting project (6a5435b6af6217b2f52c290f):
2026-07-13T00:55:08.5299995Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5435b6af6217b2f52c290f
2026-07-13T00:55:08.5301277Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-13T00:55:08.5302442Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-13T00:55:08.5303232Z         BadRequestDetail: 
2026-07-13T00:55:08.5323455Z   
2026-07-13T00:55:08.5324415Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-13T00:55:08.5325303Z         
2026-07-13T00:55:08.5325892Z         Error: error when destroying resource
2026-07-13T00:55:08.5326445Z         
2026-07-13T00:55:08.5327360Z         error deleting project (6a5435b6af6217b2f52c290f):
2026-07-13T00:55:08.5328526Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5435b6af6217b2f52c290f
2026-07-13T00:55:08.5329773Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-13T00:55:08.5331004Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-13T00:55:08.5331823Z         BadRequestDetail: 
2026-07-13T00:55:08.5332406Z --- FAIL: TestAccProject_slowOperationReadOnly (11.51s)
```

- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8937562Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-14T00:43:07.8939042Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-14T00:43:07.9009464Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-14T00:43:07.9011314Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585b436f430f45f9d1ac9/apiKeys/6765a80fde4acf1ea6a15afe PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a80fde4acf1ea6a15afe exists. Reason: Bad Request. Params: [6765a80fde4acf1ea6a15afe], BadRequestDetail: 
2026-07-14T00:43:07.9025445Z    test_working_directory=/tmp/plugintest3840923074 test_step_number=2
2026-07-14T00:43:07.9026396Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-14T00:43:07.9026874Z         
2026-07-14T00:43:07.9027227Z         Error: error when getting project from Atlas
2026-07-14T00:43:07.9027554Z         
2026-07-14T00:43:07.9027873Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.9028510Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.9029104Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.9029429Z         
2026-07-14T00:43:07.9029789Z         error getting project (6a5585b436f430f45f9d1ac9):
2026-07-14T00:43:07.9030401Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585b436f430f45f9d1ac9
2026-07-14T00:43:07.9031111Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-14T00:43:07.9031757Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-14T00:43:07.9032197Z         BadRequestDetail: 
2026-07-14T00:43:07.9043484Z   
2026-07-14T00:43:07.9044120Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-14T00:43:07.9044608Z         
2026-07-14T00:43:07.9044931Z         Error: error when destroying resource
2026-07-14T00:43:07.9045234Z         
2026-07-14T00:43:07.9045598Z         error deleting project (6a5585b436f430f45f9d1ac9):
2026-07-14T00:43:07.9046442Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585b436f430f45f9d1ac9
2026-07-14T00:43:07.9047126Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-14T00:43:07.9047793Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-14T00:43:07.9048252Z         BadRequestDetail: 
2026-07-14T00:43:07.9048579Z --- FAIL: TestAccProject_slowOperationReadOnly (81.62s)
```

- 2026-07-15

### Error 2026-07-15T00:47:54+00:00
```
2026-07-15T00:47:54.1557724Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-15T00:47:54.1560687Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-15T00:47:54.1578857Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-15T00:47:54.1581290Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a56d6cbda89dc2e583fd5dd/apiKeys/6765a80fde4acf1ea6a15afe PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a80fde4acf1ea6a15afe exists. Reason: Bad Request. Params: [6765a80fde4acf1ea6a15afe], BadRequestDetail: 
2026-07-15T00:47:54.1599251Z    test_name=TestAccProject_slowOperationReadOnly test_terraform_path=/home/runner/work/_temp/9f2749cf-0bf9-4f40-b475-853161de6e0e/terraform test_step_number=2 test_working_directory=/tmp/plugintest75114953
2026-07-15T00:47:54.1601068Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-15T00:47:54.1601741Z         
2026-07-15T00:47:54.1602320Z         Error: error when getting project from Atlas
2026-07-15T00:47:54.1602845Z         
2026-07-15T00:47:54.1603369Z           with mongodbatlas_project.test,
2026-07-15T00:47:54.1604221Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-15T00:47:54.1605083Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-15T00:47:54.1605625Z         
2026-07-15T00:47:54.1606178Z         error getting project (6a56d6cbda89dc2e583fd5dd):
2026-07-15T00:47:54.1607081Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a56d6cbda89dc2e583fd5dd
2026-07-15T00:47:54.1608051Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-15T00:47:54.1609027Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T00:47:54.1609640Z         BadRequestDetail: 
2026-07-15T00:47:54.1624504Z   
2026-07-15T00:47:54.1625299Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-15T00:47:54.1626011Z         
2026-07-15T00:47:54.1626506Z         Error: error when destroying resource
2026-07-15T00:47:54.1627005Z         
2026-07-15T00:47:54.1627574Z         error deleting project (6a56d6cbda89dc2e583fd5dd):
2026-07-15T00:47:54.1628513Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a56d6cbda89dc2e583fd5dd
2026-07-15T00:47:54.1629480Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-15T00:47:54.1630538Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T00:47:54.1631283Z         BadRequestDetail: 
2026-07-15T00:47:54.1631815Z --- FAIL: TestAccProject_slowOperationReadOnly (12.31s)
```

- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3858726Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-16T00:44:26.3860799Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-16T00:44:26.3998805Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-16T00:44:26.4000658Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5829069bd40d6f4026809d/apiKeys/6765a80fde4acf1ea6a15afe PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a80fde4acf1ea6a15afe exists. Reason: Bad Request. Params: [6765a80fde4acf1ea6a15afe], BadRequestDetail: 
2026-07-16T00:44:26.4013747Z    test_terraform_path=/home/runner/work/_temp/5323d9e7-4e32-447f-818c-74dbda448580/terraform test_working_directory=/tmp/plugintest3296560595 test_step_number=2 test_name=TestAccProject_slowOperationReadOnly
2026-07-16T00:44:26.4014935Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-16T00:44:26.4015409Z         
2026-07-16T00:44:26.4015778Z         Error: error when getting project from Atlas
2026-07-16T00:44:26.4016109Z         
2026-07-16T00:44:26.4016432Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.4017077Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.4017685Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.4018006Z         
2026-07-16T00:44:26.4018372Z         error getting project (6a5829069bd40d6f4026809d):
2026-07-16T00:44:26.4018990Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5829069bd40d6f4026809d
2026-07-16T00:44:26.4019831Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-16T00:44:26.4020492Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-16T00:44:26.4020938Z         BadRequestDetail: 
2026-07-16T00:44:26.4032055Z   
2026-07-16T00:44:26.4032575Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-16T00:44:26.4033057Z         
2026-07-16T00:44:26.4033382Z         Error: error when destroying resource
2026-07-16T00:44:26.4033692Z         
2026-07-16T00:44:26.4034053Z         error deleting project (6a5829069bd40d6f4026809d):
2026-07-16T00:44:26.4034673Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5829069bd40d6f4026809d
2026-07-16T00:44:26.4035349Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-16T00:44:26.4036016Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-16T00:44:26.4036482Z         BadRequestDetail: 
2026-07-16T00:44:26.4036817Z --- FAIL: TestAccProject_slowOperationReadOnly (91.69s)
```

- 2026-07-17 PASS 19 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0837775Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-18T00:49:47.0843272Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-18T00:49:47.0935662Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-18T00:49:47.0936699Z     resource_project_test.go:1174: Step 1/4 error: Error running apply: exit status 1
2026-07-18T00:49:47.0937513Z         
2026-07-18T00:49:47.0938364Z         Error: error creating project: test-acc-tf-p-5555002708898150133
2026-07-18T00:49:47.0939066Z         
2026-07-18T00:49:47.0939670Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.0941109Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.0942263Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.0942857Z         
2026-07-18T00:49:47.0943804Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.0945106Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.0946279Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.0947116Z --- FAIL: TestAccProject_slowOperationReadOnly (69.29s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4176556Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-21T00:47:04.4179606Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-21T00:47:04.4290627Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-21T00:47:04.4291196Z     resource_project_test.go:1174: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:47:04.4291638Z         
2026-07-21T00:47:04.4292088Z         Error: error creating project: test-acc-tf-p-1993285771267851585
2026-07-21T00:47:04.4292488Z         
2026-07-21T00:47:04.4292816Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4293459Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4294069Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4294403Z         
2026-07-21T00:47:04.4294917Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4295877Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4296508Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4296969Z --- FAIL: TestAccProject_slowOperationReadOnly (82.60s)
```

- 2026-07-22 PASS 21 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1151664Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-23T00:46:48.1174635Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-23T00:46:48.1279782Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-23T00:46:48.1280452Z     resource_project_test.go:1174: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:46:48.1280887Z         
2026-07-23T00:46:48.1281332Z         Error: error creating project: test-acc-tf-p-561501245925761416
2026-07-23T00:46:48.1281723Z         
2026-07-23T00:46:48.1282064Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1282708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1283303Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1283667Z         
2026-07-23T00:46:48.1284167Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1284838Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1285462Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1285919Z --- FAIL: TestAccProject_slowOperationReadOnly (64.13s)
```

- 2026-07-24 PASS 20 seconds
- 2026-07-25 PASS 15 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 29 seconds
- 2026-07-28 PASS 15 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 16 seconds
- 2026-07-31
  - PASS 13 seconds
  - PASS 19 seconds
  - PASS 10 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-08-04 PASS 17 seconds
- 2026-08-05 PASS 16 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-12 00:52](#error-2026-07-12t0052500000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a52e487a3d1a6cc4e59d51a/apiKeys/6765a9deed73f2187fa5b2ad | qa |  | 10.04s
[2026-07-15 07:29](#error-2026-07-15t0729230000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5735ba93daee1cb0a041a1/apiKeys/6765a9deed73f2187fa5b2ad | qa | flaky_500 | 8.05s
[2026-07-15 09:35](#error-2026-07-15t0935420000) | API_KEY_NOT_FOUND /api/atlas/v2/groups/6a5753e58f62f9b41291f7bf/apiKeys/6765a9deed73f2187fa5b2ad | qa |  | 7.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T00:52:50+00:00
```
2026-07-12T00:52:50.8363665Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-12T00:52:50.8365546Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-12T00:52:50.8383053Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-12T00:52:50.8385343Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e487a3d1a6cc4e59d51a/apiKeys/6765a9deed73f2187fa5b2ad PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a9deed73f2187fa5b2ad exists. Reason: Bad Request. Params: [6765a9deed73f2187fa5b2ad], BadRequestDetail: 
2026-07-12T00:52:50.8398822Z    test_working_directory=/tmp/plugintest2151443246 test_step_number=2 test_name=TestAccProject_slowOperationReadOnly
2026-07-12T00:52:50.8399696Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-12T00:52:50.8400204Z         
2026-07-12T00:52:50.8400570Z         Error: error when getting project from Atlas
2026-07-12T00:52:50.8400899Z         
2026-07-12T00:52:50.8401215Z           with mongodbatlas_project.test,
2026-07-12T00:52:50.8402164Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-12T00:52:50.8402774Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-12T00:52:50.8403102Z         
2026-07-12T00:52:50.8403468Z         error getting project (6a52e487a3d1a6cc4e59d51a):
2026-07-12T00:52:50.8404081Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e487a3d1a6cc4e59d51a
2026-07-12T00:52:50.8404782Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-12T00:52:50.8405423Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-12T00:52:50.8405863Z         BadRequestDetail: 
2026-07-12T00:52:50.8417161Z    test_working_directory=/tmp/plugintest2151443246 test_step_number=2 test_name=TestAccProject_slowOperationReadOnly
2026-07-12T00:52:50.8418301Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-12T00:52:50.8418786Z         
2026-07-12T00:52:50.8419109Z         Error: error when destroying resource
2026-07-12T00:52:50.8419416Z         
2026-07-12T00:52:50.8419787Z         error deleting project (6a52e487a3d1a6cc4e59d51a):
2026-07-12T00:52:50.8420427Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e487a3d1a6cc4e59d51a
2026-07-12T00:52:50.8421102Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-12T00:52:50.8422051Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-12T00:52:50.8422520Z         BadRequestDetail: 
2026-07-12T00:52:50.8422869Z --- FAIL: TestAccProject_slowOperationReadOnly (10.40s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 8 seconds

### Error 2026-07-15T07:29:23+00:00
```
2026-07-15T07:29:23.1696065Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-15T07:29:23.1701512Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-15T07:29:23.1707219Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-15T07:29:23.1709270Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735ba93daee1cb0a041a1/apiKeys/6765a9deed73f2187fa5b2ad PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a9deed73f2187fa5b2ad exists. Reason: Bad Request. Params: [6765a9deed73f2187fa5b2ad], BadRequestDetail: 
2026-07-15T07:29:23.1726892Z    test_terraform_path=/home/runner/work/_temp/222eced1-d913-4b45-a770-9c2013b47877/terraform test_step_number=2
2026-07-15T07:29:23.1727739Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-15T07:29:23.1728214Z         
2026-07-15T07:29:23.1728578Z         Error: error when getting project from Atlas
2026-07-15T07:29:23.1728912Z         
2026-07-15T07:29:23.1729232Z           with mongodbatlas_project.test,
2026-07-15T07:29:23.1729878Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-15T07:29:23.1730491Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-15T07:29:23.1730819Z         
2026-07-15T07:29:23.1731188Z         error getting project (6a5735ba93daee1cb0a041a1):
2026-07-15T07:29:23.1731807Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735ba93daee1cb0a041a1
2026-07-15T07:29:23.1732508Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-15T07:29:23.1733160Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T07:29:23.1733898Z         BadRequestDetail: 
2026-07-15T07:29:23.1745631Z   
2026-07-15T07:29:23.1746150Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-15T07:29:23.1746635Z         
2026-07-15T07:29:23.1746960Z         Error: error when destroying resource
2026-07-15T07:29:23.1747271Z         
2026-07-15T07:29:23.1747642Z         error deleting project (6a5735ba93daee1cb0a041a1):
2026-07-15T07:29:23.1748273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735ba93daee1cb0a041a1
2026-07-15T07:29:23.1748952Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-15T07:29:23.1749614Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T07:29:23.1750076Z         BadRequestDetail: 
2026-07-15T07:29:23.1750408Z --- FAIL: TestAccProject_slowOperationReadOnly (8.53s)
```

  - FAIL 7 seconds

### Error 2026-07-15T09:35:42+00:00
```
2026-07-15T09:35:42.2960619Z === RUN   TestAccProject_slowOperationReadOnly
2026-07-15T09:35:42.2963722Z === CONT  TestAccProject_slowOperationReadOnly
2026-07-15T09:35:42.2975456Z === NAME  TestAccProject_slowOperationReadOnly
2026-07-15T09:35:42.2977422Z     resource_project_test.go:1183: PreConfig: error updating key https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753e58f62f9b41291f7bf/apiKeys/6765a9deed73f2187fa5b2ad PATCH: HTTP 400 Bad Request (Error code: "API_KEY_NOT_FOUND") Detail: No API key with ID 6765a9deed73f2187fa5b2ad exists. Reason: Bad Request. Params: [6765a9deed73f2187fa5b2ad], BadRequestDetail: 
2026-07-15T09:35:42.2990802Z    test_name=TestAccProject_slowOperationReadOnly
2026-07-15T09:35:42.2991818Z     resource_project_test.go:1171: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-07-15T09:35:42.2992299Z         
2026-07-15T09:35:42.2992677Z         Error: error when getting project from Atlas
2026-07-15T09:35:42.2993017Z         
2026-07-15T09:35:42.2993360Z           with mongodbatlas_project.test,
2026-07-15T09:35:42.2994015Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-15T09:35:42.2994633Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-15T09:35:42.2994961Z         
2026-07-15T09:35:42.2995336Z         error getting project (6a5753e58f62f9b41291f7bf):
2026-07-15T09:35:42.2996129Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753e58f62f9b41291f7bf
2026-07-15T09:35:42.2996836Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-07-15T09:35:42.2997490Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T09:35:42.2997939Z         BadRequestDetail: 
2026-07-15T09:35:42.3008663Z    test_name=TestAccProject_slowOperationReadOnly test_working_directory=/tmp/plugintest3657406554
2026-07-15T09:35:42.3009486Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-15T09:35:42.3009970Z         
2026-07-15T09:35:42.3010311Z         Error: error when destroying resource
2026-07-15T09:35:42.3010629Z         
2026-07-15T09:35:42.3011008Z         error deleting project (6a5753e58f62f9b41291f7bf):
2026-07-15T09:35:42.3011851Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753e58f62f9b41291f7bf
2026-07-15T09:35:42.3012543Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP")
2026-07-15T09:35:42.3013248Z         Detail: User cannot access this group. Reason: Unauthorized. Params: [],
2026-07-15T09:35:42.3013717Z         BadRequestDetail: 
2026-07-15T09:35:42.3014065Z --- FAIL: TestAccProject_slowOperationReadOnly (7.54s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 14 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 seconds
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
