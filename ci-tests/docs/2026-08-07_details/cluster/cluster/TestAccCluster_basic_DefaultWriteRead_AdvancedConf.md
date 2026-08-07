# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:43](#error-2026-07-18t0043290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-07-21 00:46](#error-2026-07-21t0046540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 30 minutes
- 2026-07-10 PASS 48 minutes
- 2026-07-11 PASS 20 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 21 minutes
- 2026-07-15 PASS 29 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T00:43:29+00:00
```
2026-07-18T00:43:29.9121832Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-07-18T00:44:34.3622491Z     shared_resource.go:160: 
2026-07-18T00:44:34.3625243Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:34.3629102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:44:34.3632503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:44:34.3635585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:44:34.3638144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:44:34.3640704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:159
2026-07-18T00:44:34.3643563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:220
2026-07-18T00:44:34.3645053Z         	Error:      	Received unexpected error:
2026-07-18T00:44:34.3647472Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:34.3648866Z         	Test:       	TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-07-18T00:44:34.3651122Z         	Messages:   	Project creation failed: test-acc-tf-p-8932547510537560770, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:34.3652966Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (64.45s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:54+00:00
```
2026-07-21T00:46:54.4067406Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-07-21T00:48:32.4321013Z     shared_resource.go:160: 
2026-07-21T00:48:32.4323385Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:48:32.4326610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:48:32.4328825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:48:32.4330980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:48:32.4333157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:48:32.4335776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:159
2026-07-21T00:48:32.4337946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:220
2026-07-21T00:48:32.4338793Z         	Error:      	Received unexpected error:
2026-07-21T00:48:32.4340836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:32.4342082Z         	Test:       	TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-07-21T00:48:32.4343946Z         	Messages:   	Project creation failed: test-acc-tf-p-2071797896561986361, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:32.4345202Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (98.03s)
```

- 2026-07-22 PASS 40 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 32 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 30 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 21 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 26 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 minutes
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
  - PASS 20 minutes
  - PASS 23 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
