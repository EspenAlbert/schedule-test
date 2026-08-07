# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_withBackup Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-8795327094897976255 | dev | flaky_500 | 2418.07s
[2026-07-11 00:44](#error-2026-07-11t0044200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-07-21 00:45](#error-2026-07-21t0045400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 53 minutes
- 2026-07-10

### Error 2026-07-10T00:49:40+00:00
```
2026-07-10T00:49:40.8207411Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-07-10T01:38:51.9430449Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-07-10T01:39:06.9502166Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-07-10T01:39:06.9504077Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:06.949898542Z, ProjectID: 6a5041a2e2d93fff09dc5867, Cluster name: test-acc-tf-c-8795327094897976255
2026-07-10T02:19:10.6741648Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-07-10T02:19:10.6742510Z     resource_global_cluster_config_test.go:34: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:19:10.6743151Z         
2026-07-10T02:19:10.6743446Z         Error: Error in delete
2026-07-10T02:19:10.6743729Z         
2026-07-10T02:19:10.6744209Z         cluster name: test-acc-tf-c-8795327094897976255, API error details:
2026-07-10T02:19:10.6745190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-8795327094897976255
2026-07-10T02:19:10.6746079Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:19:10.6746738Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:19:10.6747190Z         BadRequestDetail: 
2026-07-10T02:19:10.6747540Z --- FAIL: TestAccGlobalClusterConfig_withBackup (2418.73s)
```

- 2026-07-11

### Error 2026-07-11T00:44:20+00:00
```
2026-07-11T00:44:20.7303446Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-07-11T00:44:20.7304135Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-3603250224729662046
2026-07-11T00:45:32.2006981Z     resource_global_cluster_config_test.go:34: 
2026-07-11T00:45:32.2015650Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:32.2019251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:32.2021376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:32.2023509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:45:32.2025801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-07-11T00:45:32.2028193Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-07-11T00:45:32.2029786Z         	Error:      	Received unexpected error:
2026-07-11T00:45:32.2032288Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:32.2033440Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-07-11T00:45:32.2035243Z         	Messages:   	Project creation failed: test-acc-tf-p-3603250224729662046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:32.2036596Z --- FAIL: TestAccGlobalClusterConfig_withBackup (71.47s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 29 minutes
- 2026-07-14 PASS 42 minutes
- 2026-07-15 PASS 19 minutes
- 2026-07-16 PASS 59 minutes
- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 17 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:40+00:00
```
2026-07-21T00:45:40.2929902Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-07-21T00:45:40.2930605Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-5410810229665917491
2026-07-21T00:46:41.9073151Z     resource_global_cluster_config_test.go:34: 
2026-07-21T00:46:41.9074273Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:41.9076020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:46:41.9077732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:46:41.9079631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:46:41.9082144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-07-21T00:46:41.9084298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-07-21T00:46:41.9085179Z         	Error:      	Received unexpected error:
2026-07-21T00:46:41.9087079Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:41.9088123Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-07-21T00:46:41.9090628Z         	Messages:   	Project creation failed: test-acc-tf-p-5410810229665917491, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:41.9091872Z --- FAIL: TestAccGlobalClusterConfig_withBackup (61.62s)
```

- 2026-07-22 PASS 28 minutes
- 2026-07-23 PASS 36 minutes
- 2026-07-24 PASS an hour
- 2026-07-25 PASS 18 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 27 minutes
- 2026-07-30 PASS 41 minutes
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 17 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 17 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
