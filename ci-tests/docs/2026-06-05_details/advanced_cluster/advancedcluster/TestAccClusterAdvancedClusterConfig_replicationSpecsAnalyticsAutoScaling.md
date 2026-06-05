# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.07s
[2026-05-28 01:01](#error-2026-05-28t0101340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T01:08:57+00:00
```
2026-05-09T01:08:57.6387088Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-05-09T01:10:16.3072200Z     shared_resource.go:160: 
2026-05-09T01:10:16.3073904Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:10:16.3077387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:10:16.3079660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:10:16.3081798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:10:16.3083530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:10:16.3085529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:474
2026-05-09T01:10:16.3086317Z         	Error:      	Received unexpected error:
2026-05-09T01:10:16.3088223Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:10:16.3089439Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-05-09T01:10:16.3091243Z         	Messages:   	Project creation failed: test-acc-tf-p-1967833540189564074, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:10:16.3092488Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (78.67s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 56 minutes
- 2026-05-12 PASS 52 minutes
- 2026-05-13 PASS an hour
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 49 minutes
- 2026-05-16 PASS 43 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 41 minutes
- 2026-05-20 PASS 55 minutes
- 2026-05-21 PASS an hour
- 2026-05-22 PASS 2 hours
- 2026-05-23 PASS 59 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 54 minutes
- 2026-05-26 PASS 45 minutes
- 2026-05-27 PASS 2 hours
- 2026-05-28

### Error 2026-05-28T01:01:34+00:00
```
2026-05-28T01:01:34.0954584Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-05-28T01:02:44.2438127Z     shared_resource.go:160: 
2026-05-28T01:02:44.2441206Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:44.2445282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:44.2447597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:44.2450329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:44.2452121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:44.2454149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:475
2026-05-28T01:02:44.2455334Z         	Error:      	Received unexpected error:
2026-05-28T01:02:44.2457743Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:44.2459266Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-05-28T01:02:44.2461445Z         	Messages:   	Project creation failed: test-acc-tf-p-4914103681060649367, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:44.2463013Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (70.15s)
```

- 2026-05-29 PASS an hour
- 2026-05-30 PASS 43 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 42 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 53 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 49 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 45 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 44 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 44 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
