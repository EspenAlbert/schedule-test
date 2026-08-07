# cluster/cluster/TestAccCluster_emptyAdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:44](#error-2026-07-18t0044340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.02s
[2026-07-21 00:48](#error-2026-07-21t0048320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 30 minutes
- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 20 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 25 minutes
- 2026-07-14 PASS 21 minutes
- 2026-07-15 PASS 28 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T00:44:34+00:00
```
2026-07-18T00:44:34.3653498Z === RUN   TestAccCluster_emptyAdvancedConf
2026-07-18T00:45:48.5304128Z     shared_resource.go:160: 
2026-07-18T00:45:48.5309155Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:45:48.5315192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:45:48.5318398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:45:48.5321212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:45:48.5324048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:45:48.5326812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:224
2026-07-18T00:45:48.5327826Z         	Error:      	Received unexpected error:
2026-07-18T00:45:48.5330625Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:45:48.5331934Z         	Test:       	TestAccCluster_emptyAdvancedConf
2026-07-18T00:45:48.5334674Z         	Messages:   	Project creation failed: test-acc-tf-p-2337465025911058927, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:45:48.5336173Z --- FAIL: TestAccCluster_emptyAdvancedConf (74.17s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:48:32+00:00
```
2026-07-21T00:48:32.4345768Z === RUN   TestAccCluster_emptyAdvancedConf
2026-07-21T00:49:37.6131959Z     shared_resource.go:160: 
2026-07-21T00:49:37.6135103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:37.6141733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:49:37.6144123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:49:37.6146178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:49:37.6148060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:49:37.6150015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:224
2026-07-21T00:49:37.6150879Z         	Error:      	Received unexpected error:
2026-07-21T00:49:37.6153621Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:37.6155455Z         	Test:       	TestAccCluster_emptyAdvancedConf
2026-07-21T00:49:37.6158581Z         	Messages:   	Project creation failed: test-acc-tf-p-4769609501414629137, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:37.6160529Z --- FAIL: TestAccCluster_emptyAdvancedConf (65.18s)
```

- 2026-07-22 PASS 33 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 34 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 21 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 20 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 20 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 29 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 22 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
