# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 7)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058090000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.04s
[2026-07-11 00:55](#error-2026-07-11t0055150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s
[2026-07-21 00:53](#error-2026-07-21t0053130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2026-07-31 00:46](#error-2026-07-31t0046320000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a6bf068f401293a46db6c1f/clusters/test-acc-tf-c-5653953264129357135 | dev | 946.07s
[2026-08-06 00:40](#error-2026-08-06t0040010000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a73d7e1357372fed31faad5/clusters/test-acc-tf-c-6568051398481516750 | dev | 919.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:09+00:00
```
2026-07-09T00:58:09.7025482Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-09T00:58:11.1082242Z     shared_resource.go:160: 
2026-07-09T00:58:11.1084158Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:11.1087917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:11.1090307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:11.1092634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:11.1095081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:11.1097517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:924
2026-07-09T00:58:11.1098535Z         	Error:      	Received unexpected error:
2026-07-09T00:58:11.1101505Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:11.1103056Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-09T00:58:11.1105682Z         	Messages:   	Project creation failed: test-acc-tf-p-1533220212509003040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:11.1107694Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1.41s)
```

- 2026-07-10 PASS 52 minutes
- 2026-07-11

### Error 2026-07-11T00:55:15+00:00
```
2026-07-11T00:55:15.5369344Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-11T00:55:15.9540191Z     shared_resource.go:160: 
2026-07-11T00:55:15.9541491Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:15.9543328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:55:15.9545527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:55:15.9547264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:55:15.9549010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:55:15.9550839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:924
2026-07-11T00:55:15.9551643Z         	Error:      	Received unexpected error:
2026-07-11T00:55:15.9554578Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:15.9556081Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-11T00:55:15.9558952Z         	Messages:   	Project creation failed: test-acc-tf-p-1258922908250747076, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:15.9560529Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.42s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 42 minutes
- 2026-07-14 PASS 43 minutes
- 2026-07-15 PASS 36 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 40 minutes
- 2026-07-18 PASS 40 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:13+00:00
```
2026-07-21T00:53:13.9560560Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-21T00:53:14.7037654Z     shared_resource.go:160: 
2026-07-21T00:53:14.7038938Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:14.7041158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:14.7042987Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:14.7044729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:14.7046489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:14.7048771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:924
2026-07-21T00:53:14.7049568Z         	Error:      	Received unexpected error:
2026-07-21T00:53:14.7052485Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:14.7053935Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-21T00:53:14.7056256Z         	Messages:   	Project creation failed: test-acc-tf-p-664813356489717917, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:14.7057763Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.75s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:41+00:00
```
2026-07-23T00:49:41.0238574Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-23T00:49:42.0788247Z     shared_resource.go:160: 
2026-07-23T00:49:42.0789922Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:42.0793028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:42.0795546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:42.0797704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:42.0799651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:42.0801688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:924
2026-07-23T00:49:42.0802699Z         	Error:      	Received unexpected error:
2026-07-23T00:49:42.0805747Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:42.0807492Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-23T00:49:42.0809929Z         	Messages:   	Project creation failed: test-acc-tf-p-3296373570084388277, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:42.0811583Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1.06s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 46 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 44 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - FAIL 15 minutes

### Error 2026-07-31T00:46:32+00:00
```
2026-07-31T00:46:32.7375994Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-31T00:46:35.0614986Z     resource_test.go:991: Adding variable groupId=6a6bf068f401293a46db6c1f
2026-07-31T00:46:35.0616415Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-5653953264129357135
2026-07-31T00:47:47.0566602Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-31T01:00:25.9469687Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-07-31T01:00:25.9471772Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8805656344935866670
2026-07-31T01:00:26.1867761Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5985157648854788931
2026-07-31T01:00:30.0591996Z   
2026-07-31T01:00:30.0594869Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-07-31T01:00:30.0595608Z         
2026-07-31T01:00:30.0596092Z         Error: Error in update
2026-07-31T01:00:30.0596553Z         
2026-07-31T01:00:30.0597195Z           with mongodbatlas_advanced_cluster.test,
2026-07-31T01:00:30.0598578Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-31T01:00:30.0599607Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-31T01:00:30.0599965Z         
2026-07-31T01:00:30.0600764Z         cluster name: test-acc-tf-c-5653953264129357135, API error details:
2026-07-31T01:00:30.0601858Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6bf068f401293a46db6c1f/clusters/test-acc-tf-c-5653953264129357135
2026-07-31T01:00:30.0602879Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-07-31T01:00:30.0604234Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-07-31T01:00:30.0605368Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-07-31T01:00:30.0606231Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-07-31T01:00:30.0606853Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-07-31T01:03:31.4002558Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (946.67s)
```

  - PASS 22 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 24 minutes
- 2026-08-04 PASS 24 minutes
- 2026-08-05 PASS 23 minutes
- 2026-08-06

### Error 2026-08-06T00:40:01+00:00
```
2026-08-06T00:40:01.5557824Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:40:05.7802411Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-6568051398481516750
2026-08-06T00:40:05.7803391Z     resource_test.go:991: Adding variable groupId=6a73d7e1357372fed31faad5
2026-08-06T00:41:25.1468058Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:41:25.8730682Z   diagnostic_detail=
2026-08-06T00:41:25.8736038Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State"
2026-08-06T00:54:01.7785150Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:54:01.7786363Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-401718349034318443
2026-08-06T00:54:02.0469847Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5378595803015451581
2026-08-06T00:54:02.6400171Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8475770284112456875
2026-08-06T00:54:08.5627568Z   
2026-08-06T00:54:08.5627995Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-06T00:54:08.5628489Z         
2026-08-06T00:54:08.5628744Z         Error: Error in update
2026-08-06T00:54:08.5628981Z         
2026-08-06T00:54:08.5629349Z           with mongodbatlas_advanced_cluster.test,
2026-08-06T00:54:08.5630069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-06T00:54:08.5630634Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-06T00:54:08.5630915Z         
2026-08-06T00:54:08.5631297Z         cluster name: test-acc-tf-c-6568051398481516750, API error details:
2026-08-06T00:54:08.5632027Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a73d7e1357372fed31faad5/clusters/test-acc-tf-c-6568051398481516750
2026-08-06T00:54:08.5632684Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-06T00:54:08.5633233Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-06T00:54:08.5633996Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-06T00:54:08.5634529Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-06T00:54:08.5635031Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-06T00:56:40.1247185Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (919.20s)
```

- 2026-08-07 PASS 27 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-02 00:49](#error-2026-08-02t0049130000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a6e9409df072c7eb4fb1472/clusters/test-acc-tf-c-8216665794441928141 | qa | 861.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 37 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 34 minutes
  - PASS 22 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 minutes
  - PASS 29 minutes
- 2026-07-30 PASS 24 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02

### Error 2026-08-02T00:49:13+00:00
```
2026-08-02T00:49:13.7110965Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-02T00:49:15.6163001Z     resource_test.go:991: Adding variable groupId=6a6e9409df072c7eb4fb1472
2026-08-02T00:49:15.6163876Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-8216665794441928141
2026-08-02T00:51:22.5797843Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-02T01:03:33.1037456Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-02T01:03:33.1038813Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4978343186422703261
2026-08-02T01:03:33.4068803Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-685748592841124617
2026-08-02T01:03:33.7052303Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-587416712284861756
2026-08-02T01:03:39.9901979Z   
2026-08-02T01:03:39.9902374Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-02T01:03:39.9902747Z         
2026-08-02T01:03:39.9903029Z         Error: Error in update
2026-08-02T01:03:39.9903265Z         
2026-08-02T01:03:39.9903630Z           with mongodbatlas_advanced_cluster.test,
2026-08-02T01:03:39.9904212Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-02T01:03:39.9906540Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-02T01:03:39.9907002Z         
2026-08-02T01:03:39.9907504Z         cluster name: test-acc-tf-c-8216665794441928141, API error details:
2026-08-02T01:03:39.9908547Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a6e9409df072c7eb4fb1472/clusters/test-acc-tf-c-8216665794441928141
2026-08-02T01:03:39.9909509Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-02T01:03:39.9910332Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-02T01:03:39.9911310Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-02T01:03:39.9912074Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-02T01:03:39.9912657Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-02T01:05:41.4248984Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (861.17s)
```

- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
