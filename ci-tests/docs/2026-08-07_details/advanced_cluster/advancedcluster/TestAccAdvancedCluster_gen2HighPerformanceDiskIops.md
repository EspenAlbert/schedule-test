# advanced_cluster/advancedcluster/TestAccAdvancedCluster_gen2HighPerformanceDiskIops Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 7)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.10s
[2026-07-11 00:56](#error-2026-07-11t0056430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-21 00:53](#error-2026-07-21t0053210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.02s
[2026-07-23 00:49](#error-2026-07-23t0049480000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:22+00:00
```
2026-07-09T00:58:22.8579232Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-09T00:58:23.8317450Z     shared_resource.go:160: 
2026-07-09T00:58:23.8319776Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:23.8323362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:23.8326278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:23.8328631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:23.8330610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:23.8332701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3316
2026-07-09T00:58:23.8333842Z         	Error:      	Received unexpected error:
2026-07-09T00:58:23.8337267Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:23.8338875Z         	Test:       	TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-09T00:58:23.8341463Z         	Messages:   	Project creation failed: test-acc-tf-p-5448323703768567683, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:23.8343090Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (0.98s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:56:43+00:00
```
2026-07-11T00:56:43.7380455Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-11T00:56:43.9771899Z     shared_resource.go:160: 
2026-07-11T00:56:43.9773209Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:56:43.9775227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:56:43.9777020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:56:43.9778799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:56:43.9780528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:56:43.9782363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3316
2026-07-11T00:56:43.9783173Z         	Error:      	Received unexpected error:
2026-07-11T00:56:43.9786115Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:43.9787586Z         	Test:       	TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-11T00:56:43.9789992Z         	Messages:   	Project creation failed: test-acc-tf-p-5141695786832898107, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:43.9791943Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (0.24s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 19 minutes
- 2026-07-15 PASS 22 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 28 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:21+00:00
```
2026-07-21T00:53:21.9230104Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-21T00:53:23.0878593Z     shared_resource.go:160: 
2026-07-21T00:53:23.0880442Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:23.0882277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:23.0884031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:23.0885764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:23.0887506Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:23.0889388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3316
2026-07-21T00:53:23.0890459Z         	Error:      	Received unexpected error:
2026-07-21T00:53:23.0893690Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:23.0895131Z         	Test:       	TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-21T00:53:23.0897545Z         	Messages:   	Project creation failed: test-acc-tf-p-5971632664779071016, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:23.0899070Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (1.17s)
```

- 2026-07-22 PASS 37 minutes
- 2026-07-23

### Error 2026-07-23T00:49:48+00:00
```
2026-07-23T00:49:48.6276286Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-23T00:49:49.3873365Z     shared_resource.go:160: 
2026-07-23T00:49:49.3875364Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:49.3877382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:49.3879372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:49.3881533Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:49.3884023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:49.3886249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3316
2026-07-23T00:49:49.3887192Z         	Error:      	Received unexpected error:
2026-07-23T00:49:49.3890462Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:49.3892351Z         	Test:       	TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-23T00:49:49.3895156Z         	Messages:   	Project creation failed: test-acc-tf-p-1464813660141317886, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:49.3897014Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (0.76s)
```

- 2026-07-24 PASS 42 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 23 minutes
- 2026-07-30 PASS 54 minutes
- 2026-07-31
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 12 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 00:50](#error-2026-07-12t0050520000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a52e47054924de0baf51465/clusters/test-acc-tf-c-1924728750485220434 | qa | 941.01s
[2026-07-15 07:26](#error-2026-07-15t0726090000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a57359493daee1cb0a00fa9/clusters/test-acc-tf-c-5023072808167992151 | qa | 1039.06s
[2026-07-15 09:34](#error-2026-07-15t0934190000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a5753d28f62f9b41291d1a0/clusters/test-acc-tf-c-5822944868712140398 | qa | 858.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T00:50:52+00:00
```
2026-07-12T00:50:52.8418763Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-12T00:50:53.0174475Z === CONT  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-12T00:51:27.7764119Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-12T00:51:32.7769132Z     pre_check.go:46: Time before creating cluster: 2026-07-12T00:51:27.776111896Z, ProjectID: 6a52e47054924de0baf51465, Cluster name: test-acc-tf-c-1924728750485220434
2026-07-12T01:02:00.9159409Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-12T01:02:00.9160300Z     resource_test.go:3319: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-12T01:02:00.9160838Z         
2026-07-12T01:02:00.9161225Z         Error: Error in update
2026-07-12T01:02:00.9161505Z         
2026-07-12T01:02:00.9161971Z           with mongodbatlas_advanced_cluster.test,
2026-07-12T01:02:00.9162782Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-12T01:02:00.9163559Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-12T01:02:00.9163969Z         
2026-07-12T01:02:00.9164537Z         cluster name: test-acc-tf-c-1924728750485220434, API error details:
2026-07-12T01:02:00.9165611Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e47054924de0baf51465/clusters/test-acc-tf-c-1924728750485220434
2026-07-12T01:02:00.9166421Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-12T01:02:00.9167057Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-12T01:02:00.9167528Z         Params: [], BadRequestDetail: 
2026-07-12T01:02:10.8156177Z   
2026-07-12T01:06:33.8293217Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (941.06s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 17 minutes

### Error 2026-07-15T07:26:09+00:00
```
2026-07-15T07:26:09.9008195Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T07:26:10.0349509Z === CONT  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T07:26:59.9078060Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T07:26:59.9081016Z     pre_check.go:46: Time before creating cluster: 2026-07-15T07:26:59.907525067Z, ProjectID: 6a57359493daee1cb0a00fa9, Cluster name: test-acc-tf-c-5023072808167992151
2026-07-15T07:38:27.0639331Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T07:38:27.0640171Z     resource_test.go:3319: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-15T07:38:27.0640830Z         
2026-07-15T07:38:27.0641115Z         Error: Error in update
2026-07-15T07:38:27.0641371Z         
2026-07-15T07:38:27.0641851Z           with mongodbatlas_advanced_cluster.test,
2026-07-15T07:38:27.0642565Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-15T07:38:27.0643406Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-15T07:38:27.0643747Z         
2026-07-15T07:38:27.0644197Z         cluster name: test-acc-tf-c-5023072808167992151, API error details:
2026-07-15T07:38:27.0645343Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a57359493daee1cb0a00fa9/clusters/test-acc-tf-c-5023072808167992151
2026-07-15T07:38:27.0646193Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-15T07:38:27.0646849Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-15T07:38:27.0647327Z         Params: [], BadRequestDetail: 
2026-07-15T07:43:29.5243710Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (1039.62s)
```

  - FAIL 14 minutes

### Error 2026-07-15T09:34:19+00:00
```
2026-07-15T09:34:19.5939263Z === RUN   TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T09:34:19.8481114Z === CONT  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T09:34:39.6044897Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T09:34:39.6047653Z     pre_check.go:46: Time before creating cluster: 2026-07-15T09:34:39.604134027Z, ProjectID: 6a5753d28f62f9b41291d1a0, Cluster name: test-acc-tf-c-5822944868712140398
2026-07-15T09:45:35.8708009Z === NAME  TestAccAdvancedCluster_gen2HighPerformanceDiskIops
2026-07-15T09:45:35.8709342Z     resource_test.go:3319: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-15T09:45:35.8710093Z         
2026-07-15T09:45:35.8710396Z         Error: Error in update
2026-07-15T09:45:35.8710697Z         
2026-07-15T09:45:35.8711264Z           with mongodbatlas_advanced_cluster.test,
2026-07-15T09:45:35.8712082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-15T09:45:35.8712925Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-15T09:45:35.8714918Z         
2026-07-15T09:45:35.8715617Z         cluster name: test-acc-tf-c-5822944868712140398, API error details:
2026-07-15T09:45:35.8716580Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753d28f62f9b41291d1a0/clusters/test-acc-tf-c-5822944868712140398
2026-07-15T09:45:35.8717915Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-15T09:45:35.8718641Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-15T09:45:35.8719164Z         Params: [], BadRequestDetail: 
2026-07-15T09:48:37.5414528Z --- FAIL: TestAccAdvancedCluster_gen2HighPerformanceDiskIops (858.00s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 19 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-07-30 PASS 14 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
