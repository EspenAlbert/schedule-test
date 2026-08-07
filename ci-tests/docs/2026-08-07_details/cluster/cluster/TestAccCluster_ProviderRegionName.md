# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:52](#error-2026-07-21t0052260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:46](#error-2026-07-23t0046160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS an hour
- 2026-07-10 PASS an hour
- 2026-07-11 PASS 39 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 56 minutes
- 2026-07-14 PASS 53 minutes
- 2026-07-15 PASS 42 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS 49 minutes
- 2026-07-18 PASS 45 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:26+00:00
```
2026-07-21T00:52:26.8834791Z === RUN   TestAccCluster_ProviderRegionName
2026-07-21T00:52:27.5431579Z     shared_resource.go:160: 
2026-07-21T00:52:27.5433780Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.5437820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:27.5441145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:27.5443705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:27.5446676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:27.5449374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-07-21T00:52:27.5450502Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.5453624Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.5455095Z         	Test:       	TestAccCluster_ProviderRegionName
2026-07-21T00:52:27.5457629Z         	Messages:   	Project creation failed: test-acc-tf-p-1287485768695297063, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.5459189Z --- FAIL: TestAccCluster_ProviderRegionName (0.66s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:46:16+00:00
```
2026-07-23T00:46:16.4149424Z === RUN   TestAccCluster_ProviderRegionName
2026-07-23T00:47:21.0448668Z     shared_resource.go:160: 
2026-07-23T00:47:21.0450456Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:21.0457112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:47:21.0459935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:47:21.0463106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:47:21.0466330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:47:21.0471110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-07-23T00:47:21.0472922Z         	Error:      	Received unexpected error:
2026-07-23T00:47:21.0476094Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:21.0477681Z         	Test:       	TestAccCluster_ProviderRegionName
2026-07-23T00:47:21.0479411Z         	Messages:   	Project creation failed: test-acc-tf-p-7012790882827060864, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:21.0480538Z --- FAIL: TestAccCluster_ProviderRegionName (64.63s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 43 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 47 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 38 minutes
- 2026-08-01 PASS 38 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 41 minutes
- 2026-08-04 PASS 38 minutes
- 2026-08-05 PASS 39 minutes
- 2026-08-06 PASS 38 minutes
- 2026-08-07 PASS 40 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 42 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 42 minutes
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
- 2026-07-26 PASS 39 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 38 minutes
  - PASS 38 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 39 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
