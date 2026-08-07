# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058010000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-10 00:49](#error-2026-07-10t0049540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041b0e2d93fff09dc952f/clusters/test-acc-tf-c-7777412184047237202 | dev | flaky_500 | 5363.01s
[2026-07-21 00:53](#error-2026-07-21t0053080000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-23 00:49](#error-2026-07-23t0049370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:01+00:00
```
2026-07-09T00:58:01.7845700Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-09T00:58:02.4940518Z     shared_resource.go:160: 
2026-07-09T00:58:02.4942900Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:02.4947037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:02.4948994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:02.4950827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:02.4952663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:02.4954745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:477
2026-07-09T00:58:02.4955556Z         	Error:      	Received unexpected error:
2026-07-09T00:58:02.4958440Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:02.4960067Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-09T00:58:02.4962603Z         	Messages:   	Project creation failed: test-acc-tf-p-5098792867706058652, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:02.4964716Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (0.71s)
```

- 2026-07-10

### Error 2026-07-10T00:49:54+00:00
```
2026-07-10T00:49:54.4618035Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-10T01:03:49.9980191Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-10T01:04:29.6209209Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-10T01:04:29.6210737Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:04:29.620620994Z, ProjectID: 6a5041b0e2d93fff09dc952f, Cluster name: test-acc-tf-c-7197506648248206870
2026-07-10T02:33:12.7141332Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-10T02:33:12.7142167Z     resource_test.go:489: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:33:12.7142673Z         
2026-07-10T02:33:12.7142949Z         Error: Error in delete
2026-07-10T02:33:12.7143217Z         
2026-07-10T02:33:12.7143677Z         cluster name: test-acc-tf-c-7777412184047237202, API error details:
2026-07-10T02:33:12.7144618Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041b0e2d93fff09dc952f/clusters/test-acc-tf-c-7777412184047237202
2026-07-10T02:33:12.7145495Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:33:12.7146156Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:33:12.7146608Z         BadRequestDetail: 
2026-07-10T02:33:12.7147103Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (5363.10s)
```

- 2026-07-11 PASS 47 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 58 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS 55 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:08+00:00
```
2026-07-21T00:53:08.9033713Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-21T00:53:10.0092844Z     shared_resource.go:160: 
2026-07-21T00:53:10.0093892Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:10.0095933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:10.0097701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:10.0099452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:10.0102132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:10.0104013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:477
2026-07-21T00:53:10.0104812Z         	Error:      	Received unexpected error:
2026-07-21T00:53:10.0107610Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:10.0109151Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-21T00:53:10.0111731Z         	Messages:   	Project creation failed: test-acc-tf-p-7401713679607620962, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:10.0113332Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (1.11s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:37+00:00
```
2026-07-23T00:49:37.5187566Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-23T00:49:38.0381660Z     shared_resource.go:160: 
2026-07-23T00:49:38.0387172Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:38.0390554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:38.0392868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:38.0394721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:38.0396541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:38.0398648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:477
2026-07-23T00:49:38.0399466Z         	Error:      	Received unexpected error:
2026-07-23T00:49:38.0402478Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:38.0404102Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-07-23T00:49:38.0406603Z         	Messages:   	Project creation failed: test-acc-tf-p-8897288499727462163, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:38.0408508Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (0.52s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 57 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 46 minutes
  - PASS 43 minutes
- 2026-08-01 PASS 46 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 46 minutes
- 2026-08-04 PASS 49 minutes
- 2026-08-05 PASS 48 minutes
- 2026-08-06 PASS 46 minutes
- 2026-08-07 PASS 50 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 57 minutes
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
- 2026-07-26 PASS 58 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 48 minutes
  - PASS 49 minutes
- 2026-07-30 PASS 47 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 43 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
