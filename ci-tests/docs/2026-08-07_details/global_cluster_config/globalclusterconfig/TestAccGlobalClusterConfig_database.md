# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:46](#error-2026-07-11t0046340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.08s
[2026-07-21 00:47](#error-2026-07-21t0047570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 33 minutes
- 2026-07-10 PASS 49 minutes
- 2026-07-11

### Error 2026-07-11T00:46:34+00:00
```
2026-07-11T00:46:34.3201649Z === RUN   TestAccGlobalClusterConfig_database
2026-07-11T00:46:34.3202587Z     resource_global_cluster_config_test.go:158: Creating execution project (1): test-acc-tf-p-3935583549503209788
2026-07-11T00:48:07.1676343Z     resource_global_cluster_config_test.go:158: 
2026-07-11T00:48:07.1681125Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:07.1685905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:07.1688401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:07.1690383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:48:07.1692683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:158
2026-07-11T00:48:07.1694338Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:48:07.1694856Z         	Error:      	Received unexpected error:
2026-07-11T00:48:07.1696776Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:07.1697845Z         	Test:       	TestAccGlobalClusterConfig_database
2026-07-11T00:48:07.1699600Z         	Messages:   	Project creation failed: test-acc-tf-p-3935583549503209788, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:07.1700780Z --- FAIL: TestAccGlobalClusterConfig_database (92.85s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 44 minutes
- 2026-07-14 PASS 29 minutes
- 2026-07-15 PASS 33 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 40 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:57+00:00
```
2026-07-21T00:47:57.4515425Z === RUN   TestAccGlobalClusterConfig_database
2026-07-21T00:47:57.4516108Z     resource_global_cluster_config_test.go:158: Creating execution project (1): test-acc-tf-p-360081774930162766
2026-07-21T00:49:28.9679202Z     resource_global_cluster_config_test.go:158: 
2026-07-21T00:49:28.9682532Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:28.9687352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:28.9689098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:28.9691568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:49:28.9693594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:158
2026-07-21T00:49:28.9694850Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:49:28.9695391Z         	Error:      	Received unexpected error:
2026-07-21T00:49:28.9697318Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:28.9699242Z         	Test:       	TestAccGlobalClusterConfig_database
2026-07-21T00:49:28.9702252Z         	Messages:   	Project creation failed: test-acc-tf-p-360081774930162766, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:28.9704534Z --- FAIL: TestAccGlobalClusterConfig_database (91.52s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 53 minutes
- 2026-07-25 PASS 40 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 25 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 27 minutes
- 2026-08-04 PASS 26 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 24 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 35 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 32 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 30 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
