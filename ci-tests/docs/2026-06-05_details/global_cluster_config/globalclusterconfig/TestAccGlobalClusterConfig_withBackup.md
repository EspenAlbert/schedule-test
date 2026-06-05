# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_withBackup Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:01](#error-2026-05-19t0101470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.06s
[2026-05-23 01:00](#error-2026-05-23t0100000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.01s
[2026-05-26 02:09](#error-2026-05-26t0209300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-05-28 00:57](#error-2026-05-28t0057540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 50 minutes
- 2026-05-08 PASS 27 minutes
- 2026-05-09 PASS 20 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 24 minutes
- 2026-05-12 PASS 27 minutes
- 2026-05-13 PASS 22 minutes
- 2026-05-14 PASS 36 minutes
- 2026-05-15 PASS 21 minutes
- 2026-05-16 PASS 19 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 27 minutes
- 2026-05-19

### Error 2026-05-19T01:01:47+00:00
```
2026-05-19T01:01:47.9345295Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-05-19T01:01:47.9345954Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-3044797882090455431
2026-05-19T01:03:24.5595438Z     resource_global_cluster_config_test.go:34: 
2026-05-19T01:03:24.5599764Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:24.5603175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:24.5604973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:03:24.5606950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:03:24.5609338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-19T01:03:24.5611565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-05-19T01:03:24.5612433Z         	Error:      	Received unexpected error:
2026-05-19T01:03:24.5614334Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.5615401Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-05-19T01:03:24.5617289Z         	Messages:   	Project creation failed: test-acc-tf-p-3044797882090455431, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.5618466Z --- FAIL: TestAccGlobalClusterConfig_withBackup (96.63s)
```

- 2026-05-20 PASS 18 minutes
- 2026-05-21 PASS 38 minutes
- 2026-05-22 PASS 53 minutes
- 2026-05-23

### Error 2026-05-23T01:00:00+00:00
```
2026-05-23T01:00:00.5777940Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-05-23T01:00:00.5778604Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-2945133538419728954
2026-05-23T01:01:21.7163222Z     resource_global_cluster_config_test.go:34: 
2026-05-23T01:01:21.7167006Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:21.7171990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:21.7174333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:21.7176037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:01:21.7178669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-23T01:01:21.7181531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-05-23T01:01:21.7183052Z         	Error:      	Received unexpected error:
2026-05-23T01:01:21.7186083Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:21.7187778Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-05-23T01:01:21.7190850Z         	Messages:   	Project creation failed: test-acc-tf-p-2945133538419728954, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:21.7192935Z --- FAIL: TestAccGlobalClusterConfig_withBackup (81.14s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26

### Error 2026-05-26T02:09:30+00:00
```
2026-05-26T02:09:30.1287294Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-05-26T02:09:30.1287973Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-458848215570006912
2026-05-26T02:10:37.9734932Z     resource_global_cluster_config_test.go:34: 
2026-05-26T02:10:37.9738159Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:37.9744030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:10:37.9746881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:10:37.9748620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-26T02:10:37.9751220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-26T02:10:37.9754101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-05-26T02:10:37.9755014Z         	Error:      	Received unexpected error:
2026-05-26T02:10:37.9756939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:37.9758076Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-05-26T02:10:37.9759846Z         	Messages:   	Project creation failed: test-acc-tf-p-458848215570006912, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:37.9762434Z --- FAIL: TestAccGlobalClusterConfig_withBackup (67.85s)
```

- 2026-05-27 PASS 58 minutes
- 2026-05-28

### Error 2026-05-28T00:57:54+00:00
```
2026-05-28T00:57:54.6219470Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-05-28T00:57:54.6220446Z     resource_global_cluster_config_test.go:34: Creating execution project (1): test-acc-tf-p-5766691585039096563
2026-05-28T00:59:18.6487881Z     resource_global_cluster_config_test.go:34: 
2026-05-28T00:59:18.6490973Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:18.6495142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:18.6498313Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:18.6500651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T00:59:18.6502824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-05-28T00:59:18.6507279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:34
2026-05-28T00:59:18.6508844Z         	Error:      	Received unexpected error:
2026-05-28T00:59:18.6512289Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:18.6513756Z         	Test:       	TestAccGlobalClusterConfig_withBackup
2026-05-28T00:59:18.6515597Z         	Messages:   	Project creation failed: test-acc-tf-p-5766691585039096563, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:18.6516846Z --- FAIL: TestAccGlobalClusterConfig_withBackup (84.03s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 15 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 30 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 31 minutes
- 2026-06-04 PASS 29 minutes
- 2026-06-05 PASS 17 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 17 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
