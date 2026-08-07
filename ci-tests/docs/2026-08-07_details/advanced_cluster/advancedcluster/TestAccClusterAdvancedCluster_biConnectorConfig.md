# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058080000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 00:55](#error-2026-07-11t0055150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-07-21 00:53](#error-2026-07-21t0053130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:49](#error-2026-07-23t0049400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:08+00:00
```
2026-07-09T00:58:08.4888177Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-09T00:58:09.6995603Z     shared_resource.go:160: 
2026-07-09T00:58:09.6997452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:09.7000485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:09.7003437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:09.7005620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:09.7007618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:09.7009864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:849
2026-07-09T00:58:09.7010916Z         	Error:      	Received unexpected error:
2026-07-09T00:58:09.7016429Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:09.7019041Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-09T00:58:09.7021794Z         	Messages:   	Project creation failed: test-acc-tf-p-1541983214504311917, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:09.7023450Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1.21s)
```

- 2026-07-10 PASS 56 minutes
- 2026-07-11

### Error 2026-07-11T00:55:15+00:00
```
2026-07-11T00:55:15.3768913Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-11T00:55:15.5346230Z     shared_resource.go:160: 
2026-07-11T00:55:15.5347415Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:15.5350647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:55:15.5352496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:55:15.5354639Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:55:15.5356663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:55:15.5358542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:849
2026-07-11T00:55:15.5359359Z         	Error:      	Received unexpected error:
2026-07-11T00:55:15.5362209Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:15.5363764Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-11T00:55:15.5366119Z         	Messages:   	Project creation failed: test-acc-tf-p-3549163733737627559, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:15.5367618Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.16s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 32 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:13+00:00
```
2026-07-21T00:53:13.3391915Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-21T00:53:13.9538052Z     shared_resource.go:160: 
2026-07-21T00:53:13.9539528Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:13.9541979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:13.9543779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:13.9545952Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:13.9547726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:13.9549555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:849
2026-07-21T00:53:13.9550580Z         	Error:      	Received unexpected error:
2026-07-21T00:53:13.9553387Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:13.9554865Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-21T00:53:13.9557250Z         	Messages:   	Project creation failed: test-acc-tf-p-5991731382272537663, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:13.9558766Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.62s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:40+00:00
```
2026-07-23T00:49:40.5002312Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-23T00:49:41.0215266Z     shared_resource.go:160: 
2026-07-23T00:49:41.0216959Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:41.0219381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:41.0221295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:41.0223510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:41.0225390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:41.0227351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:849
2026-07-23T00:49:41.0228184Z         	Error:      	Received unexpected error:
2026-07-23T00:49:41.0231090Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:41.0232726Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-23T00:49:41.0235182Z         	Messages:   	Project creation failed: test-acc-tf-p-1407713531875889261, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:41.0236826Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.52s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 36 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 32 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 20 minutes
  - PASS 21 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 minutes
- 2026-08-04 PASS 21 minutes
- 2026-08-05 PASS 20 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-30 07:59](#error-2026-07-30t0759270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a6b045d4ef023d775afe79b/clusters/test-acc-tf-c-3272169802004230006 | qa | flaky_500 | 1412.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 34 minutes
  - PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 39 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 31 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 22 minutes
  - PASS 29 minutes
- 2026-07-30

### Error 2026-07-30T07:59:27+00:00
```
2026-07-30T07:59:27.4540587Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-30T08:01:00.3940220Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-30T08:02:34.4350307Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-30T08:02:34.4351914Z     pre_check.go:46: Time before creating cluster: 2026-07-30T08:02:34.434720511Z, ProjectID: 6a6b045d4ef023d775afe79b, Cluster name: test-acc-tf-c-3272169802004230006
2026-07-30T08:19:58.8337101Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-30T08:19:58.8338141Z     resource_test.go:851: Step 2/3 error: Error running apply: exit status 1
2026-07-30T08:19:58.8339128Z         
2026-07-30T08:19:58.8339825Z         Error: Error in update
2026-07-30T08:19:58.8340251Z         
2026-07-30T08:19:58.8340824Z           with mongodbatlas_advanced_cluster.test,
2026-07-30T08:19:58.8342188Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-30T08:19:58.8343427Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-30T08:19:58.8344064Z         
2026-07-30T08:19:58.8344993Z         cluster=test-acc-tf-c-3272169802004230006 didn't reach desired state: IDLE,
2026-07-30T08:19:58.8345755Z         error:
2026-07-30T08:19:58.8347126Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a6b045d4ef023d775afe79b/clusters/test-acc-tf-c-3272169802004230006
2026-07-30T08:19:58.8349038Z         GET: HTTP 401 Unauthorized (Error code: "UNEXPECTED_ERROR") Detail: You are
2026-07-30T08:19:58.8350358Z         not authorized for this resource. Reason: Unauthorized. Params: [],
2026-07-30T08:19:58.8351110Z         BadRequestDetail: 
2026-07-30T08:24:32.1194149Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1412.71s)
```

- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
