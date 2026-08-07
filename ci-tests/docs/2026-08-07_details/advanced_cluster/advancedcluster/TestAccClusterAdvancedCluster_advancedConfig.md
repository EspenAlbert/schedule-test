# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057590000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-10 00:49](#error-2026-07-10t0049520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041adaf0479f8ffb33972/clusters/test-acc-tf-c-2733102028795983598 | dev | flaky_500 | 5546.02s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-07-23 00:49](#error-2026-07-23t0049360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:59+00:00
```
2026-07-09T00:57:59.2083035Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-07-09T00:58:00.1101292Z     shared_resource.go:160: 
2026-07-09T00:58:00.1103520Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.1106496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:00.1108652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:00.1110790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:00.1112898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:00.1114989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:317
2026-07-09T00:58:00.1115812Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.1118687Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.1120145Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2026-07-09T00:58:00.1122578Z         	Messages:   	Project creation failed: test-acc-tf-p-4226057514796369715, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.1124188Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.90s)
```

- 2026-07-10

### Error 2026-07-10T00:49:52+00:00
```
2026-07-10T00:49:52.1611265Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-07-10T01:03:50.0660134Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-07-10T01:04:44.6236627Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-07-10T01:04:44.6238783Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:04:44.623418613Z, ProjectID: 6a5041adaf0479f8ffb33972, Cluster name: test-acc-tf-c-2077677241733357538
2026-07-10T02:36:15.8403334Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-07-10T02:36:15.8404070Z     resource_test.go:352: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:36:15.8404579Z         
2026-07-10T02:36:15.8404854Z         Error: Error in delete
2026-07-10T02:36:15.8405119Z         
2026-07-10T02:36:15.8405566Z         cluster name: test-acc-tf-c-2733102028795983598, API error details:
2026-07-10T02:36:15.8406505Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041adaf0479f8ffb33972/clusters/test-acc-tf-c-2733102028795983598
2026-07-10T02:36:15.8407351Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:36:15.8408008Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:36:15.8408686Z         BadRequestDetail: 
2026-07-10T02:36:15.8409059Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (5546.23s)
```

- 2026-07-11 PASS 42 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 46 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS 53 minutes
- 2026-07-18 PASS 46 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.6292130Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-07-21T00:53:07.1313362Z     shared_resource.go:160: 
2026-07-21T00:53:07.1315011Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:07.1317358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:07.1319184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:07.1321170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:07.1322995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:07.1324850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:317
2026-07-21T00:53:07.1325647Z         	Error:      	Received unexpected error:
2026-07-21T00:53:07.1328428Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:07.1330402Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2026-07-21T00:53:07.1332718Z         	Messages:   	Project creation failed: test-acc-tf-p-1622264497140893913, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:07.1334195Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.50s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:36+00:00
```
2026-07-23T00:49:36.2937209Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-07-23T00:49:36.6967309Z     shared_resource.go:160: 
2026-07-23T00:49:36.6969311Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:36.6972399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:36.6975079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:36.6978017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:36.6980615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:36.6982983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:317
2026-07-23T00:49:36.6983875Z         	Error:      	Received unexpected error:
2026-07-23T00:49:36.6986974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:36.6988428Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2026-07-23T00:49:36.6990905Z         	Messages:   	Project creation failed: test-acc-tf-p-7601514166890862171, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:36.6992586Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.41s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 51 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS 52 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 39 minutes
  - PASS 36 minutes
- 2026-08-01 PASS 38 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 38 minutes
- 2026-08-04 PASS 42 minutes
- 2026-08-05 PASS 41 minutes
- 2026-08-06 PASS 38 minutes
- 2026-08-07 PASS 41 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 56 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 51 minutes
  - PASS 44 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 50 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 38 minutes
  - PASS 39 minutes
- 2026-07-30 PASS 44 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 39 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
