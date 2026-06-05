# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.09s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.08s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.02s
[2026-05-26 02:12](#error-2026-05-26t0212160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.01s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 27 seconds
  - PASS 23 seconds
- 2026-05-08 PASS 16 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.3910779Z === RUN   TestAccCustomDBRoles_Basic
2026-05-09T00:59:14.3911672Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-9143439072940889920
2026-05-09T00:59:14.3912540Z     resource_test.go:40: 
2026-05-09T00:59:14.3916482Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:59:14.3925015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:59:14.3926660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:59:14.3928362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-09T00:59:14.3929975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-09T00:59:14.3930988Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T00:59:14.3931495Z         	Error:      	Received unexpected error:
2026-05-09T00:59:14.3933169Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.3934599Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-09T00:59:14.3936120Z         	Messages:   	Project creation failed: test-acc-tf-p-9143439072940889920, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.3937105Z --- FAIL: TestAccCustomDBRoles_Basic (81.92s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 19 seconds
- 2026-05-12 PASS 52 seconds
- 2026-05-13 PASS 20 seconds
- 2026-05-14 PASS 32 seconds
- 2026-05-15 PASS 18 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5666243Z === RUN   TestAccCustomDBRoles_Basic
2026-05-16T01:00:42.5666797Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-2812456287011850671
2026-05-16T01:00:42.5667273Z     resource_test.go:40: 
2026-05-16T01:00:42.5668181Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5670013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5671841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5673718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-16T01:00:42.5675836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-16T01:00:42.5677036Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:00:42.5677553Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5679688Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5680699Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-16T01:00:42.5682458Z         	Messages:   	Project creation failed: test-acc-tf-p-2812456287011850671, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5683642Z --- FAIL: TestAccCustomDBRoles_Basic (69.85s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 21 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8949269Z === RUN   TestAccCustomDBRoles_Basic
2026-05-19T01:08:20.8950520Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6335339063504378926
2026-05-19T01:08:20.8951631Z     resource_test.go:40: 
2026-05-19T01:08:20.8953477Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:20.8957239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:20.8960748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:20.8964561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-19T01:08:20.8968766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-19T01:08:20.8971153Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:08:20.8972282Z         	Error:      	Received unexpected error:
2026-05-19T01:08:20.8976456Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8978441Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-19T01:08:20.8981857Z         	Messages:   	Project creation failed: test-acc-tf-p-6335339063504378926, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8984359Z --- FAIL: TestAccCustomDBRoles_Basic (71.76s)
```

- 2026-05-20 PASS 21 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7144981Z === RUN   TestAccCustomDBRoles_Basic
2026-05-21T01:07:04.7145538Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6540230285821306513
2026-05-21T01:07:04.7146035Z     resource_test.go:40: 
2026-05-21T01:07:04.7146952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:07:04.7148781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:07:04.7150746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:07:04.7152986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-21T01:07:04.7155026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-21T01:07:04.7156237Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:07:04.7156756Z         	Error:      	Received unexpected error:
2026-05-21T01:07:04.7158742Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7159885Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-21T01:07:04.7161643Z         	Messages:   	Project creation failed: test-acc-tf-p-6540230285821306513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7162810Z --- FAIL: TestAccCustomDBRoles_Basic (74.24s)
```

- 2026-05-22 PASS 19 seconds
- 2026-05-23 PASS 23 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 19 seconds
- 2026-05-26

### Error 2026-05-26T02:12:16+00:00
```
2026-05-26T02:12:16.0302064Z === RUN   TestAccCustomDBRoles_Basic
2026-05-26T02:12:16.0303523Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-7811030416422289672
2026-05-26T02:12:16.0304536Z     resource_test.go:40: 
2026-05-26T02:12:16.0306236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:12:16.0309299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:12:16.0313029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:12:16.0317268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-26T02:12:16.0320705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-26T02:12:16.0322864Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:12:16.0324372Z         	Error:      	Received unexpected error:
2026-05-26T02:12:16.0327837Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0329631Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-26T02:12:16.0332837Z         	Messages:   	Project creation failed: test-acc-tf-p-7811030416422289672, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0335132Z --- FAIL: TestAccCustomDBRoles_Basic (90.06s)
```

- 2026-05-27 PASS 19 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7547034Z === RUN   TestAccCustomDBRoles_Basic
2026-05-28T01:01:56.7547577Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4582540880136757649
2026-05-28T01:01:56.7548049Z     resource_test.go:40: 
2026-05-28T01:01:56.7549064Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.7550990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.7552794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.7554647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-05-28T01:01:56.7556531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-05-28T01:01:56.7557720Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:56.7558231Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.7560173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7561270Z         	Test:       	TestAccCustomDBRoles_Basic
2026-05-28T01:01:56.7563002Z         	Messages:   	Project creation failed: test-acc-tf-p-4582540880136757649, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7564168Z --- FAIL: TestAccCustomDBRoles_Basic (64.32s)
```

- 2026-05-29 PASS 17 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 17 seconds
- 2026-06-02 PASS 54 seconds
- 2026-06-03 PASS 20 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 18 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 19 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
