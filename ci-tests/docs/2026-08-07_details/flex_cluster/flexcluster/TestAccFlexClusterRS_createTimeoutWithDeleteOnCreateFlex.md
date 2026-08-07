# flex_cluster/flexcluster/TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:46](#error-2026-07-11t0046540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.05s
[2026-07-16 01:00](#error-2026-07-16t0100540000) |  | dev | timeout | 605.07s
[2026-07-18 00:43](#error-2026-07-18t0043250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-07-21 00:47](#error-2026-07-21t0047370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-23 00:47](#error-2026-07-23t0047120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 5 minutes
- 2026-07-10 PASS 11 seconds
- 2026-07-11

### Error 2026-07-11T00:46:54+00:00
```
2026-07-11T00:46:54.9676620Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-11T00:46:54.9677295Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-248516066797199626
2026-07-11T00:48:25.4832946Z     resource_test.go:37: 
2026-07-11T00:48:25.4836339Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:25.4840665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:25.4843915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:25.4846692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:37
2026-07-11T00:48:25.4847543Z         	Error:      	Received unexpected error:
2026-07-11T00:48:25.4849552Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:25.4850755Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-11T00:48:25.4852732Z         	Messages:   	Project creation failed: test-acc-tf-p-248516066797199626, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:25.4854086Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (90.52s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 13 seconds
- 2026-07-16

### Error 2026-07-16T01:00:54+00:00
```
2026-07-16T01:00:54.3157840Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-16T01:00:54.3162228Z === CONT  TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-16T01:00:59.9940739Z   diagnostic_summary=
2026-07-16T01:00:59.9947096Z    diagnostic_detail="Name: test-acc-tf-119319897216238638, Project ID: 6a58295af57fbffe6b36464f" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=8d3808a1-654e-99c2-a1bd-9a55dbfd3f03 tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_flex_cluster
2026-07-16T01:11:00.0503002Z     resource_test.go:45: 
2026-07-16T01:11:00.0505909Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:65
2026-07-16T01:11:00.0509876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:45
2026-07-16T01:11:00.0511939Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/testing/testing.go:1317
2026-07-16T01:11:00.0513516Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/testing/testing.go:1667
2026-07-16T01:11:00.0515075Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/testing/testing.go:2030
2026-07-16T01:11:00.0516338Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T01:11:00.0516920Z         	Error:      	Received unexpected error:
2026-07-16T01:11:00.0518092Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 10m0s)
2026-07-16T01:11:00.0519092Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-16T01:11:00.0519718Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (605.73s)
```

- 2026-07-17 PASS 32 seconds
- 2026-07-18

### Error 2026-07-18T00:43:25+00:00
```
2026-07-18T00:43:25.1187757Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-18T00:43:25.1188398Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-6004294004703560236
2026-07-18T00:44:33.7803263Z     resource_test.go:37: 
2026-07-18T00:44:33.7804464Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:33.7806697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:33.7808457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:33.7810773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:37
2026-07-18T00:44:33.7811730Z         	Error:      	Received unexpected error:
2026-07-18T00:44:33.7814606Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:33.7816389Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-18T00:44:33.7818428Z         	Messages:   	Project creation failed: test-acc-tf-p-6004294004703560236, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:33.7819905Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (68.66s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:37+00:00
```
2026-07-21T00:47:37.0971754Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-21T00:47:37.0972440Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-5377048621264763499
2026-07-21T00:48:40.2703533Z     resource_test.go:37: 
2026-07-21T00:48:40.2705221Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:48:40.2709100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:48:40.2712503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:48:40.2714843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:37
2026-07-21T00:48:40.2715818Z         	Error:      	Received unexpected error:
2026-07-21T00:48:40.2718239Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:40.2719704Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-21T00:48:40.2722213Z         	Messages:   	Project creation failed: test-acc-tf-p-5377048621264763499, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:40.2723790Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (63.18s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:47:12+00:00
```
2026-07-23T00:47:12.3576429Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-23T00:47:12.3577094Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-4153384815845074075
2026-07-23T00:48:14.0484588Z     resource_test.go:37: 
2026-07-23T00:48:14.0486242Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:14.0489615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:14.0491589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:14.0493550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:37
2026-07-23T00:48:14.0494340Z         	Error:      	Received unexpected error:
2026-07-23T00:48:14.0496252Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.0497409Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-07-23T00:48:14.0499181Z         	Messages:   	Project creation failed: test-acc-tf-p-4153384815845074075, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.0500378Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (61.69s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29
  - PASS 11 seconds
  - PASS 5 seconds
- 2026-07-30 PASS a minute
- 2026-07-31 PASS 42 seconds
- 2026-08-01 PASS 41 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 42 seconds
- 2026-08-04 PASS a minute
- 2026-08-05 PASS 32 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 53 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 42 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 32 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 42 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS 32 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 41 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
