# project/projectipaccesslist/TestAccProjectIPAccessList_settingIPAddress Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:44](#error-2026-03-03t0044560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 29 seconds
- 2026-02-06 PASS 25 seconds
- 2026-02-07 PASS 32 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 seconds
- 2026-02-10 PASS 29 seconds
- 2026-02-11 PASS 27 seconds
- 2026-02-12 PASS 31 seconds
- 2026-02-13 PASS 28 seconds
- 2026-02-14 PASS 30 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 28 seconds
- 2026-02-17 PASS 32 seconds
- 2026-02-18 PASS 25 seconds
- 2026-02-19 PASS 30 seconds
- 2026-02-20 PASS 26 seconds
- 2026-02-21 PASS 29 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 seconds
- 2026-02-24 PASS 29 seconds
- 2026-02-25 PASS 26 seconds
- 2026-02-26 PASS 34 seconds
- 2026-02-27 PASS 27 seconds
- 2026-02-28 PASS 31 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 27 seconds
- 2026-03-03

### Error 2026-03-03T00:44:56+00:00
```
2026-03-03T00:44:56.6267762Z === RUN   TestAccProjectIPAccessList_settingIPAddress
2026-03-03T00:44:56.6269315Z     resource_project_ip_access_list_test.go:25: Creating execution project (1): test-acc-tf-p-2362105484495673901
2026-03-03T00:44:56.6270518Z     resource_project_ip_access_list_test.go:25: 
2026-03-03T00:44:56.6274413Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-03T00:44:56.6276724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-03T00:44:56.6278720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-03T00:44:56.6281034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:25
2026-03-03T00:44:56.6282279Z         	Error:      	Received unexpected error:
2026-03-03T00:44:56.6284374Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:44:56.6285582Z         	Test:       	TestAccProjectIPAccessList_settingIPAddress
2026-03-03T00:44:56.6287524Z         	Messages:   	Project creation failed: test-acc-tf-p-2362105484495673901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:44:56.6289030Z --- FAIL: TestAccProjectIPAccessList_settingIPAddress (62.71s)
```

- 2026-03-04 PASS 29 seconds
- 2026-03-05 PASS a minute
- 2026-03-06 PASS 29 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-03 09:37](#error-2026-03-03t0937480000) |  | qa | 24.05s

### Timeline
- 2026-02-04 PASS 26 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 24 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 seconds
- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:37:48+00:00
```
2026-03-03T09:37:48.2285881Z === RUN   TestAccProjectIPAccessList_settingIPAddress
2026-03-03T09:37:48.2291058Z === CONT  TestAccProjectIPAccessList_settingIPAddress
2026-03-03T09:37:48.2315762Z === NAME  TestAccProjectIPAccessList_settingIPAddress
2026-03-03T09:37:48.2316520Z     resource_project_ip_access_list_test.go:33: Step 2/3 error: After applying this test step, the refresh plan was not empty.
2026-03-03T09:37:48.2317078Z         stdout
2026-03-03T09:37:48.2317279Z         
2026-03-03T09:37:48.2317930Z         Terraform used the selected providers to generate the following execution
2026-03-03T09:37:48.2318544Z         plan. Resource actions are indicated with the following symbols:
2026-03-03T09:37:48.2319015Z         -/+ destroy and then create replacement
2026-03-03T09:37:48.2319372Z          <= read (data resources)
2026-03-03T09:37:48.2319752Z         
2026-03-03T09:37:48.2320088Z         Terraform will perform the following actions:
2026-03-03T09:37:48.2320386Z         
2026-03-03T09:37:48.2320867Z           # data.mongodbatlas_project_ip_access_list.test will be read during apply
2026-03-03T09:37:48.2321485Z           # (depends on a resource or a module with changes pending)
2026-03-03T09:37:48.2321998Z          <= data "mongodbatlas_project_ip_access_list" "test" {
2026-03-03T09:37:48.2322514Z               + aws_security_group = (known after apply)
2026-03-03T09:37:48.2323214Z               + cidr_block         = (known after apply)
2026-03-03T09:37:48.2323692Z               + comment            = (known after apply)
2026-03-03T09:37:48.2324148Z               + id                 = (known after apply)
2026-03-03T09:37:48.2324585Z               + ip_address         = "179.154.228.14"
2026-03-03T09:37:48.2325083Z               + project_id         = "69a6aa7161f800e9358a531d"
2026-03-03T09:37:48.2325402Z             }
2026-03-03T09:37:48.2325603Z         
2026-03-03T09:37:48.2326115Z           # data.mongodbatlas_project_ip_access_lists.test will be read during apply
2026-03-03T09:37:48.2326724Z           # (depends on a resource or a module with changes pending)
2026-03-03T09:37:48.2327240Z          <= data "mongodbatlas_project_ip_access_lists" "test" {
2026-03-03T09:37:48.2327739Z               + project_id = "69a6aa7161f800e9358a531d"
2026-03-03T09:37:48.2328173Z               + results    = (known after apply)
2026-03-03T09:37:48.2328472Z             }
2026-03-03T09:37:48.2328668Z         
2026-03-03T09:37:48.2329082Z           # mongodbatlas_project_ip_access_list.test must be replaced
2026-03-03T09:37:48.2329627Z         -/+ resource "mongodbatlas_project_ip_access_list" "test" {
2026-03-03T09:37:48.2330307Z               ~ aws_security_group = null -> (known after apply) # forces replacement
2026-03-03T09:37:48.2331090Z               ~ cidr_block         = "179.154.228.14/32" -> (known after apply) # forces replacement
2026-03-03T09:37:48.2332255Z               ~ comment            = "TestAcc for cidrBlock updated (179.154.228.14/32)" -> "TestAcc for ipAddress updated (179.154.228.14)" # forces replacement
2026-03-03T09:37:48.2333753Z               ~ id                 = "ZW50cnk=:MTc5LjE1NC4yMjguMTQvMzI=-cHJvamVjdF9pZA==:NjlhNmFhNzE2MWY4MDBlOTM1OGE1MzFk" -> (known after apply)
2026-03-03T09:37:48.2334493Z                 # (2 unchanged attributes hidden)
2026-03-03T09:37:48.2334798Z             }
2026-03-03T09:37:48.2334999Z         
2026-03-03T09:37:48.2335308Z         Plan: 1 to add, 0 to change, 1 to destroy.
2026-03-03T09:37:48.2360183Z   
2026-03-03T09:37:48.2389474Z --- FAIL: TestAccProjectIPAccessList_settingIPAddress (24.55s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
