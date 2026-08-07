# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:52](#error-2026-07-21t0052260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:45](#error-2026-07-23t0045140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS an hour
- 2026-07-10 PASS an hour
- 2026-07-11 PASS 39 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 56 minutes
- 2026-07-14 PASS 54 minutes
- 2026-07-15 PASS 41 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS 51 minutes
- 2026-07-18 PASS 45 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:26+00:00
```
2026-07-21T00:52:26.3045388Z === RUN   TestAccCluster_MultiRegion
2026-07-21T00:52:26.8811308Z     shared_resource.go:160: 
2026-07-21T00:52:26.8812862Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:26.8815423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:26.8818419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:26.8820437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:26.8822445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:26.8824671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-07-21T00:52:26.8825561Z         	Error:      	Received unexpected error:
2026-07-21T00:52:26.8828848Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:26.8830243Z         	Test:       	TestAccCluster_MultiRegion
2026-07-21T00:52:26.8832870Z         	Messages:   	Project creation failed: test-acc-tf-p-3386136057152709994, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:26.8834433Z --- FAIL: TestAccCluster_MultiRegion (0.58s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:45:14+00:00
```
2026-07-23T00:45:14.9508951Z === RUN   TestAccCluster_MultiRegion
2026-07-23T00:46:16.4131997Z     shared_resource.go:160: 
2026-07-23T00:46:16.4133164Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:16.4134966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:46:16.4136768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:46:16.4138475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:46:16.4140172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:46:16.4142148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-07-23T00:46:16.4142955Z         	Error:      	Received unexpected error:
2026-07-23T00:46:16.4144860Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:16.4146293Z         	Test:       	TestAccCluster_MultiRegion
2026-07-23T00:46:16.4147973Z         	Messages:   	Project creation failed: test-acc-tf-p-6400402490877503303, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:16.4149064Z --- FAIL: TestAccCluster_MultiRegion (61.46s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 45 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 47 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 38 minutes
- 2026-08-01 PASS 39 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 42 minutes
- 2026-08-04 PASS 39 minutes
- 2026-08-05 PASS 43 minutes
- 2026-08-06 PASS 39 minutes
- 2026-08-07 PASS 43 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 44 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 41 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 46 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 40 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 39 minutes
  - PASS 40 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 39 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
