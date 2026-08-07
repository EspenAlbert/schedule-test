# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:43](#error-2026-07-11t0043200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.06s
[2026-07-16 00:42](#error-2026-07-16t0042430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.08s
[2026-07-18 00:41](#error-2026-07-18t0041150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-21 00:44](#error-2026-07-21t0044480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-23 00:45](#error-2026-07-23t0045090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 3 minutes
- 2026-07-10 PASS 13 minutes
- 2026-07-11

### Error 2026-07-11T00:43:20+00:00
```
2026-07-11T00:43:20.3245926Z === RUN   TestAccFlexClusterRS_basic
2026-07-11T00:43:20.3247586Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2404105029881074698
2026-07-11T00:45:05.8815799Z     resource_test.go:25: 
2026-07-11T00:45:05.8817851Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:05.8821989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:05.8827216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:05.8829813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-07-11T00:45:05.8833246Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-07-11T00:45:05.8834989Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:05.8835535Z         	Error:      	Received unexpected error:
2026-07-11T00:45:05.8837516Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:05.8838576Z         	Test:       	TestAccFlexClusterRS_basic
2026-07-11T00:45:05.8840340Z         	Messages:   	Project creation failed: test-acc-tf-p-2404105029881074698, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:05.8841513Z --- FAIL: TestAccFlexClusterRS_basic (105.56s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16

### Error 2026-07-16T00:42:43+00:00
```
2026-07-16T00:42:43.7941779Z === RUN   TestAccFlexClusterRS_basic
2026-07-16T00:42:43.7942974Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7487166551514823889
2026-07-16T00:44:10.5508904Z     resource_test.go:25: 
2026-07-16T00:44:10.5510420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:44:10.5512739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:44:10.5515425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:44:10.5517875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-07-16T00:44:10.5520301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-07-16T00:44:10.5521497Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:44:10.5522019Z         	Error:      	Received unexpected error:
2026-07-16T00:44:10.5523941Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:10.5524973Z         	Test:       	TestAccFlexClusterRS_basic
2026-07-16T00:44:10.5526692Z         	Messages:   	Project creation failed: test-acc-tf-p-7487166551514823889, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:10.5527857Z --- FAIL: TestAccFlexClusterRS_basic (86.76s)
```

- 2026-07-17 PASS 50 seconds
- 2026-07-18

### Error 2026-07-18T00:41:15+00:00
```
2026-07-18T00:41:15.9547646Z === RUN   TestAccFlexClusterRS_basic
2026-07-18T00:41:15.9548732Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-3063799608900005132
2026-07-18T00:42:20.3086635Z     resource_test.go:25: 
2026-07-18T00:42:20.3087700Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:42:20.3090216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:42:20.3091998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:42:20.3093833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-07-18T00:42:20.3095720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-07-18T00:42:20.3096876Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:42:20.3097402Z         	Error:      	Received unexpected error:
2026-07-18T00:42:20.3099318Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:20.3100434Z         	Test:       	TestAccFlexClusterRS_basic
2026-07-18T00:42:20.3102106Z         	Messages:   	Project creation failed: test-acc-tf-p-3063799608900005132, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:20.3103217Z --- FAIL: TestAccFlexClusterRS_basic (64.35s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:48+00:00
```
2026-07-21T00:44:48.4748238Z === RUN   TestAccFlexClusterRS_basic
2026-07-21T00:44:48.4749653Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7231203319447950426
2026-07-21T00:45:52.8301226Z     resource_test.go:25: 
2026-07-21T00:45:52.8303735Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:52.8307645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:45:52.8310453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:45:52.8313558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-07-21T00:45:52.8316456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-07-21T00:45:52.8318276Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:45:52.8319015Z         	Error:      	Received unexpected error:
2026-07-21T00:45:52.8321034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:52.8322349Z         	Test:       	TestAccFlexClusterRS_basic
2026-07-21T00:45:52.8324159Z         	Messages:   	Project creation failed: test-acc-tf-p-7231203319447950426, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:52.8325378Z --- FAIL: TestAccFlexClusterRS_basic (64.36s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:45:09+00:00
```
2026-07-23T00:45:09.5609797Z === RUN   TestAccFlexClusterRS_basic
2026-07-23T00:45:09.5610929Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2190339533313275784
2026-07-23T00:46:10.9880552Z     resource_test.go:25: 
2026-07-23T00:46:10.9883190Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:10.9886730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:46:10.9890124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:46:10.9893494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-07-23T00:46:10.9896435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-07-23T00:46:10.9897640Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:46:10.9898179Z         	Error:      	Received unexpected error:
2026-07-23T00:46:10.9900124Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:10.9901149Z         	Test:       	TestAccFlexClusterRS_basic
2026-07-23T00:46:10.9903127Z         	Messages:   	Project creation failed: test-acc-tf-p-2190339533313275784, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:10.9904235Z --- FAIL: TestAccFlexClusterRS_basic (61.43s)
```

- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 3 minutes
- 2026-07-29
  - PASS a minute
  - PASS 44 seconds
- 2026-07-30 PASS 26 minutes
- 2026-07-31 PASS 53 seconds
- 2026-08-01 PASS 43 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 46 seconds
- 2026-08-04 PASS 46 seconds
- 2026-08-05 PASS 59 seconds
- 2026-08-06 PASS 45 seconds
- 2026-08-07 PASS a minute

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
- 2026-07-19 PASS a minute
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
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
