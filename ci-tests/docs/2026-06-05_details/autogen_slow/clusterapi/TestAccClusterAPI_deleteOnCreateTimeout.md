# autogen_slow/clusterapi/TestAccClusterAPI_deleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.04s
[2026-05-28 01:01](#error-2026-05-28t0101280000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-05-30 01:05](#error-2026-05-30t0105140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-05-08 PASS 27 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 12 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4561269Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-19T01:06:13.4561719Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-828979423643345704
2026-05-19T01:06:13.4562108Z     resource_test.go:57: 
2026-05-19T01:06:13.4562808Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:13.4564541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:13.4566566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:13.4567995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:57
2026-05-19T01:06:13.4568609Z         	Error:      	Received unexpected error:
2026-05-19T01:06:13.4570095Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4570893Z         	Test:       	TestAccClusterAPI_deleteOnCreateTimeout
2026-05-19T01:06:13.4572243Z         	Messages:   	Project creation failed: test-acc-tf-p-828979423643345704, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4573129Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (66.38s)
```

- 2026-05-20 PASS 12 seconds
- 2026-05-21 PASS 12 seconds
- 2026-05-22 PASS 12 seconds
- 2026-05-23 PASS 12 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 11 seconds
- 2026-05-28

### Error 2026-05-28T01:01:28+00:00
```
2026-05-28T01:01:28.8780835Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-28T01:01:28.8781401Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-7362806518417924215
2026-05-28T01:01:28.8781997Z     resource_test.go:57: 
2026-05-28T01:01:28.8782863Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.8784727Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:28.8786436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:28.8788178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:57
2026-05-28T01:01:28.8788936Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.8791705Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:28.8793028Z         	Test:       	TestAccClusterAPI_deleteOnCreateTimeout
2026-05-28T01:01:28.8795228Z         	Messages:   	Project creation failed: test-acc-tf-p-7362806518417924215, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:28.8796670Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (0.38s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:05:14+00:00
```
2026-05-30T01:05:14.4799659Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-30T01:05:14.4800279Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-7132609096477929732
2026-05-30T01:05:14.4801370Z     resource_test.go:57: 
2026-05-30T01:05:14.4802306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:05:14.4804264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:05:14.4806090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:05:14.4807967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:57
2026-05-30T01:05:14.4808778Z         	Error:      	Received unexpected error:
2026-05-30T01:05:14.4810930Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4811980Z         	Test:       	TestAccClusterAPI_deleteOnCreateTimeout
2026-05-30T01:05:14.4813747Z         	Messages:   	Project creation failed: test-acc-tf-p-7132609096477929732, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4814898Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (84.48s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 12 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 01:32](#error-2026-05-10t0132030000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69ffd88b6768cfe24d97b8db/clusters | qa | out_of_capacity | 1.01s
[2026-05-24 01:23](#error-2026-05-24t0123030000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a124e150756d72c2234720e/clusters | qa | out_of_capacity | 1.04s
[2026-05-31 01:34](#error-2026-05-31t0134380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a1b89774b92bebf8ebb2241/clusters | qa | out_of_capacity | 1.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T01:32:03+00:00
```
2026-05-10T01:32:03.7443543Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-10T01:32:03.7444929Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-05-10T01:32:03.7459636Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-05-10T01:32:03.7460344Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-10T01:32:03.7460858Z         
2026-05-10T01:32:03.7461310Z         Error: Error calling API in Create
2026-05-10T01:32:03.7461602Z         
2026-05-10T01:32:03.7461928Z           with mongodbatlas_cluster_api.test,
2026-05-10T01:32:03.7462591Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-10T01:32:03.7463223Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-10T01:32:03.7463544Z         
2026-05-10T01:32:03.7464081Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ffd88b6768cfe24d97b8db/clusters
2026-05-10T01:32:03.7464821Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-10T01:32:03.7465519Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-10T01:32:03.7466053Z         Conflict. Params: [], BadRequestDetail: 
2026-05-10T01:32:03.7466442Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (1.06s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 12 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T01:23:03+00:00
```
2026-05-24T01:23:03.5850807Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-24T01:23:03.5853023Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-05-24T01:23:03.5870510Z   
2026-05-24T01:23:03.5878273Z    test_name=TestAccClusterAPI_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/56ae9475-1e18-4318-b82e-250d7e2a6299/terraform
2026-05-24T01:23:03.5883319Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-05-24T01:23:03.5884045Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-24T01:23:03.5884567Z         
2026-05-24T01:23:03.5884878Z         Error: Error calling API in Create
2026-05-24T01:23:03.5885180Z         
2026-05-24T01:23:03.5885518Z           with mongodbatlas_cluster_api.test,
2026-05-24T01:23:03.5886190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-24T01:23:03.5886820Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-24T01:23:03.5887173Z         
2026-05-24T01:23:03.5887715Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a124e150756d72c2234720e/clusters
2026-05-24T01:23:03.5888458Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-24T01:23:03.5889167Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-24T01:23:03.5889729Z         Conflict. Params: [], BadRequestDetail: 
2026-05-24T01:23:03.5893696Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (1.38s)
```

- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T01:34:38+00:00
```
2026-05-31T01:34:38.6026868Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-05-31T01:34:38.6029075Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-05-31T01:34:38.6041973Z    test_name=TestAccClusterAPI_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/94115957-0c04-43f2-aac0-08895196b66a/terraform
2026-05-31T01:34:38.6043018Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-31T01:34:38.6043563Z         
2026-05-31T01:34:38.6043903Z         Error: Error calling API in Create
2026-05-31T01:34:38.6044229Z         
2026-05-31T01:34:38.6044585Z           with mongodbatlas_cluster_api.test,
2026-05-31T01:34:38.6045271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-31T01:34:38.6045920Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-31T01:34:38.6046276Z         
2026-05-31T01:34:38.6046837Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b89774b92bebf8ebb2241/clusters
2026-05-31T01:34:38.6047845Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-31T01:34:38.6048580Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-31T01:34:38.6049144Z         Conflict. Params: [], BadRequestDetail: 
2026-05-31T01:34:38.6049582Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (1.11s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
