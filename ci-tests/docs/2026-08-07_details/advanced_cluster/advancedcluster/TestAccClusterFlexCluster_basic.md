# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2026-07-21 00:53](#error-2026-07-21t0053170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-23 00:49](#error-2026-07-23t0049430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:15+00:00
```
2026-07-09T00:58:15.7355886Z === RUN   TestAccClusterFlexCluster_basic
2026-07-09T00:58:15.7356483Z     resource_test.go:2918: Creating execution project (1): test-acc-tf-p-1662543866733373301
2026-07-09T00:58:16.8176989Z     resource_test.go:2918: 
2026-07-09T00:58:16.8178831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:16.8181731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:16.8184988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:16.8187442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2918
2026-07-09T00:58:16.8188257Z         	Error:      	Received unexpected error:
2026-07-09T00:58:16.8191136Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:16.8192555Z         	Test:       	TestAccClusterFlexCluster_basic
2026-07-09T00:58:16.8195058Z         	Messages:   	Project creation failed: test-acc-tf-p-1662543866733373301, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:16.8196617Z --- FAIL: TestAccClusterFlexCluster_basic (1.08s)
```

- 2026-07-10 PASS 13 minutes
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS 12 minutes
- 2026-07-17 PASS a minute
- 2026-07-18 PASS 2 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:17+00:00
```
2026-07-21T00:53:17.1933962Z === RUN   TestAccClusterFlexCluster_basic
2026-07-21T00:53:17.1934554Z     resource_test.go:2918: Creating execution project (1): test-acc-tf-p-4801334475775131610
2026-07-21T00:53:17.4222166Z     resource_test.go:2918: 
2026-07-21T00:53:17.4223378Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:17.4225164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:17.4226940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:17.4228786Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2918
2026-07-21T00:53:17.4229611Z         	Error:      	Received unexpected error:
2026-07-21T00:53:17.4232633Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:17.4234008Z         	Test:       	TestAccClusterFlexCluster_basic
2026-07-21T00:53:17.4236276Z         	Messages:   	Project creation failed: test-acc-tf-p-4801334475775131610, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:17.4238203Z --- FAIL: TestAccClusterFlexCluster_basic (0.23s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:49:43+00:00
```
2026-07-23T00:49:43.8798514Z === RUN   TestAccClusterFlexCluster_basic
2026-07-23T00:49:43.8799113Z     resource_test.go:2918: Creating execution project (1): test-acc-tf-p-1544756147337451074
2026-07-23T00:49:44.8268735Z     resource_test.go:2918: 
2026-07-23T00:49:44.8270915Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:44.8273856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:44.8276505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:44.8279084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2918
2026-07-23T00:49:44.8279971Z         	Error:      	Received unexpected error:
2026-07-23T00:49:44.8283203Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:44.8284698Z         	Test:       	TestAccClusterFlexCluster_basic
2026-07-23T00:49:44.8287229Z         	Messages:   	Project creation failed: test-acc-tf-p-1544756147337451074, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:44.8288871Z --- FAIL: TestAccClusterFlexCluster_basic (0.95s)
```

- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS a minute
- 2026-07-30 PASS 26 minutes
- 2026-07-31
  - PASS a minute
  - PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 2 minutes
  - PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS 2 minutes
- 2026-07-30 PASS a minute
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
