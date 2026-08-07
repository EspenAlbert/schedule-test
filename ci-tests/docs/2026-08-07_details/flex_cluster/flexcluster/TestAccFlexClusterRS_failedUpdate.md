# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:45](#error-2026-07-11t0045050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.01s
[2026-07-18 00:42](#error-2026-07-18t0042200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-21 00:45](#error-2026-07-21t0045520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.03s
[2026-07-23 00:46](#error-2026-07-23t0046100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 6 minutes
- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:45:05+00:00
```
2026-07-11T00:45:05.8841887Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-07-11T00:45:05.8842485Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7719934518991221971
2026-07-11T00:46:54.9653233Z     resource_test.go:31: 
2026-07-11T00:46:54.9656399Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:54.9659291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:54.9662148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:46:54.9664669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:137
2026-07-11T00:46:54.9666966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:31
2026-07-11T00:46:54.9668456Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:46:54.9669075Z         	Error:      	Received unexpected error:
2026-07-11T00:46:54.9671424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:54.9672880Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-07-11T00:46:54.9674865Z         	Messages:   	Project creation failed: test-acc-tf-p-7719934518991221971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:54.9676157Z --- FAIL: TestAccFlexClusterRS_failedUpdate (109.08s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS 43 seconds
- 2026-07-15 PASS 47 seconds
- 2026-07-16 PASS 16 minutes
- 2026-07-17 PASS 39 seconds
- 2026-07-18

### Error 2026-07-18T00:42:20+00:00
```
2026-07-18T00:42:20.3103606Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-07-18T00:42:20.3104179Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-926521703429613598
2026-07-18T00:43:25.1169012Z     resource_test.go:31: 
2026-07-18T00:43:25.1170717Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:43:25.1173487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:43:25.1175366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:43:25.1177597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:137
2026-07-18T00:43:25.1179795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:31
2026-07-18T00:43:25.1180969Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:43:25.1181513Z         	Error:      	Received unexpected error:
2026-07-18T00:43:25.1183443Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:25.1184479Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-07-18T00:43:25.1186175Z         	Messages:   	Project creation failed: test-acc-tf-p-926521703429613598, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:25.1187297Z --- FAIL: TestAccFlexClusterRS_failedUpdate (64.81s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:52+00:00
```
2026-07-21T00:45:52.8325775Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-07-21T00:45:52.8326380Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6673969374965286565
2026-07-21T00:47:37.0948708Z     resource_test.go:31: 
2026-07-21T00:47:37.0950834Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:37.0954484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:37.0956952Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:37.0959672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:137
2026-07-21T00:47:37.0962256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:31
2026-07-21T00:47:37.0963729Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:47:37.0964363Z         	Error:      	Received unexpected error:
2026-07-21T00:47:37.0966635Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:37.0967746Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-07-21T00:47:37.0969842Z         	Messages:   	Project creation failed: test-acc-tf-p-6673969374965286565, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:37.0971086Z --- FAIL: TestAccFlexClusterRS_failedUpdate (104.26s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:46:10+00:00
```
2026-07-23T00:46:10.9904639Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-07-23T00:46:10.9905249Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8181749698659042388
2026-07-23T00:47:12.3550385Z     resource_test.go:31: 
2026-07-23T00:47:12.3555183Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:12.3559510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:12.3562693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:12.3564578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:137
2026-07-23T00:47:12.3567236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:31
2026-07-23T00:47:12.3568603Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:47:12.3569241Z         	Error:      	Received unexpected error:
2026-07-23T00:47:12.3571762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:12.3573025Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-07-23T00:47:12.3574746Z         	Messages:   	Project creation failed: test-acc-tf-p-8181749698659042388, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:12.3575959Z --- FAIL: TestAccFlexClusterRS_failedUpdate (61.37s)
```

- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS 36 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 6 minutes
- 2026-07-29
  - PASS a minute
  - PASS 38 seconds
- 2026-07-30 PASS 7 minutes
- 2026-07-31 PASS 36 seconds
- 2026-08-01 PASS 36 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 42 seconds
- 2026-08-04 PASS 47 seconds
- 2026-08-05 PASS 39 seconds
- 2026-08-06 PASS 43 seconds
- 2026-08-07 PASS 42 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 43 seconds
  - PASS 58 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
