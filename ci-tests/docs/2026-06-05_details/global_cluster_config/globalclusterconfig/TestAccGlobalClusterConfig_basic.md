# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:00](#error-2026-05-19t0100460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-23 00:58](#error-2026-05-23t0058560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-26 02:08](#error-2026-05-26t0208160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-05-28 00:56](#error-2026-05-28t0056480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 27 minutes
- 2026-05-09 PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 24 minutes
- 2026-05-12 PASS 27 minutes
- 2026-05-13 PASS 21 minutes
- 2026-05-14 PASS 36 minutes
- 2026-05-15 PASS 20 minutes
- 2026-05-16 PASS 17 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 27 minutes
- 2026-05-19

### Error 2026-05-19T01:00:46+00:00
```
2026-05-19T01:00:46.3154482Z === RUN   TestAccGlobalClusterConfig_basic
2026-05-19T01:00:46.3155927Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-4468584415223424682
2026-05-19T01:01:47.9324380Z     resource_global_cluster_config_test.go:30: 
2026-05-19T01:01:47.9327376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:01:47.9329585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:01:47.9331726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:01:47.9333549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:01:47.9335735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-19T01:01:47.9338287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-05-19T01:01:47.9339150Z         	Error:      	Received unexpected error:
2026-05-19T01:01:47.9341047Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:01:47.9342073Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-05-19T01:01:47.9343770Z         	Messages:   	Project creation failed: test-acc-tf-p-4468584415223424682, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:01:47.9344916Z --- FAIL: TestAccGlobalClusterConfig_basic (61.62s)
```

- 2026-05-20 PASS 16 minutes
- 2026-05-21 PASS 38 minutes
- 2026-05-22 PASS 53 minutes
- 2026-05-23

### Error 2026-05-23T00:58:56+00:00
```
2026-05-23T00:58:56.4926778Z === RUN   TestAccGlobalClusterConfig_basic
2026-05-23T00:58:56.4928407Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-7289614789956248705
2026-05-23T01:00:00.5753408Z     resource_global_cluster_config_test.go:30: 
2026-05-23T01:00:00.5755016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:00:00.5758245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:00:00.5762248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:00:00.5764922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:00:00.5768155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-23T01:00:00.5770775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-05-23T01:00:00.5771685Z         	Error:      	Received unexpected error:
2026-05-23T01:00:00.5773623Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:00.5774674Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-05-23T01:00:00.5776403Z         	Messages:   	Project creation failed: test-acc-tf-p-7289614789956248705, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:00.5777566Z --- FAIL: TestAccGlobalClusterConfig_basic (64.08s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 24 minutes
- 2026-05-26

### Error 2026-05-26T02:08:16+00:00
```
2026-05-26T02:08:16.7164117Z === RUN   TestAccGlobalClusterConfig_basic
2026-05-26T02:08:16.7165819Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-8460198532138057160
2026-05-26T02:09:30.1263416Z     resource_global_cluster_config_test.go:30: 
2026-05-26T02:09:30.1265590Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:09:30.1268802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:09:30.1271410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:09:30.1273889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-26T02:09:30.1276543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-26T02:09:30.1279359Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-05-26T02:09:30.1280455Z         	Error:      	Received unexpected error:
2026-05-26T02:09:30.1282751Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:30.1284010Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-05-26T02:09:30.1285735Z         	Messages:   	Project creation failed: test-acc-tf-p-8460198532138057160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:30.1286901Z --- FAIL: TestAccGlobalClusterConfig_basic (73.41s)
```

- 2026-05-27 PASS 58 minutes
- 2026-05-28

### Error 2026-05-28T00:56:48+00:00
```
2026-05-28T00:56:48.7526590Z === RUN   TestAccGlobalClusterConfig_basic
2026-05-28T00:56:48.7527820Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-7062452109679510542
2026-05-28T00:57:54.6198403Z     resource_global_cluster_config_test.go:30: 
2026-05-28T00:57:54.6200259Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:57:54.6203341Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:57:54.6205757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:57:54.6207506Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T00:57:54.6209886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-28T00:57:54.6212131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-05-28T00:57:54.6213068Z         	Error:      	Received unexpected error:
2026-05-28T00:57:54.6215051Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:57:54.6216140Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-05-28T00:57:54.6217887Z         	Messages:   	Project creation failed: test-acc-tf-p-7062452109679510542, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:57:54.6219032Z --- FAIL: TestAccGlobalClusterConfig_basic (65.87s)
```

- 2026-05-29 PASS 24 minutes
- 2026-05-30 PASS 16 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 30 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 32 minutes
- 2026-06-04 PASS 29 minutes
- 2026-06-05 PASS 16 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 17 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
