# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:02](#error-2026-05-19t0102010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.09s
[2026-05-28 00:58](#error-2026-05-28t0058410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.05s
[2026-05-30 01:01](#error-2026-05-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.04s
[2026-06-02 01:09](#error-2026-06-02t0109130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 37 minutes
- 2026-05-08 PASS 20 minutes
- 2026-05-09 PASS 23 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 21 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 19 minutes
- 2026-05-14 PASS 54 minutes
- 2026-05-15 PASS 18 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 28 minutes
- 2026-05-19

### Error 2026-05-19T01:02:01+00:00
```
2026-05-19T01:02:01.9774057Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-19T01:03:51.8434158Z     shared_resource.go:160: 
2026-05-19T01:03:51.8437664Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:51.8445731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-19T01:03:51.8448643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-19T01:03:51.8451048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-19T01:03:51.8455128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-19T01:03:51.8458290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-19T01:03:51.8461540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-05-19T01:03:51.8462806Z         	Error:      	Received unexpected error:
2026-05-19T01:03:51.8465045Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:51.8466133Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-19T01:03:51.8467905Z         	Messages:   	Project creation failed: test-acc-tf-p-7468758630517594784, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:51.8470178Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (109.87s)
```

- 2026-05-20 PASS 19 minutes
- 2026-05-21 PASS 20 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 21 minutes
- 2026-05-26 PASS 17 minutes
- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T00:58:41+00:00
```
2026-05-28T00:58:41.9151312Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-28T01:00:24.4127314Z     shared_resource.go:160: 
2026-05-28T01:00:24.4130310Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:24.4134477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:00:24.4137752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:00:24.4140640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:00:24.4143783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:00:24.4148864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:00:24.4155209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-05-28T01:00:24.4156304Z         	Error:      	Received unexpected error:
2026-05-28T01:00:24.4158518Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:24.4159637Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-28T01:00:24.4161454Z         	Messages:   	Project creation failed: test-acc-tf-p-2364188247442723891, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:24.4162875Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (102.50s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30

### Error 2026-05-30T01:01:13+00:00
```
2026-05-30T01:01:13.5598160Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-30T01:02:48.9173195Z     shared_resource.go:160: 
2026-05-30T01:02:48.9175985Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:48.9180685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:02:48.9183667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:02:48.9185975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:02:48.9189360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:02:48.9193222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-30T01:02:48.9196554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-05-30T01:02:48.9197809Z         	Error:      	Received unexpected error:
2026-05-30T01:02:48.9200058Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:48.9201158Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-05-30T01:02:48.9202928Z         	Messages:   	Project creation failed: test-acc-tf-p-1977276756263706909, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:48.9204389Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (95.36s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 37 minutes
- 2026-06-02

### Error 2026-06-02T01:09:13+00:00
```
2026-06-02T01:09:13.5769748Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-06-02T01:10:16.7763065Z     shared_resource.go:160: 
2026-06-02T01:10:16.7765195Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:10:16.7769124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:10:16.7771662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:10:16.7773998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:10:16.7775984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:10:16.7778390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-06-02T01:10:16.7780456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-06-02T01:10:16.7781563Z         	Error:      	Received unexpected error:
2026-06-02T01:10:16.7783571Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:16.7784794Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-06-02T01:10:16.7786926Z         	Messages:   	Project creation failed: test-acc-tf-p-3308653599843586550, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:16.7788388Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (63.20s)
```

- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 18 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 24 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 22 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 19 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 15 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
