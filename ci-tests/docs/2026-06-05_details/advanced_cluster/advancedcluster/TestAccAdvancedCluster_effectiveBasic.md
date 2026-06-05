# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:54](#error-2026-05-16t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-05-19 01:00](#error-2026-05-19t0100530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s
[2026-05-23 00:58](#error-2026-05-23t0058560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-05-28 00:56](#error-2026-05-28t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.09s
[2026-05-30 01:00](#error-2026-05-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-06-02 01:07](#error-2026-06-02t0107330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 37 minutes
- 2026-05-08 PASS 21 minutes
- 2026-05-09 PASS 24 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 22 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 16 minutes
- 2026-05-14 PASS 51 minutes
- 2026-05-15 PASS 17 minutes
- 2026-05-16

### Error 2026-05-16T00:54:09+00:00
```
2026-05-16T00:54:09.6834216Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-16T00:55:16.1707818Z     shared_resource.go:160: 
2026-05-16T00:55:16.1711538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:16.1714132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-16T00:55:16.1716284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-16T00:55:16.1718728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-16T00:55:16.1720999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-16T00:55:16.1722951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-16T00:55:16.1724963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-16T00:55:16.1725782Z         	Error:      	Received unexpected error:
2026-05-16T00:55:16.1727713Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:16.1729154Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-16T00:55:16.1730926Z         	Messages:   	Project creation failed: test-acc-tf-p-250700221801777279, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:16.1732197Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (66.49s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 26 minutes
- 2026-05-19

### Error 2026-05-19T01:00:53+00:00
```
2026-05-19T01:00:53.9204789Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-19T01:02:01.9754029Z     shared_resource.go:160: 
2026-05-19T01:02:01.9755144Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:02:01.9757434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-19T01:02:01.9759257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-19T01:02:01.9761007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-19T01:02:01.9762726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-19T01:02:01.9764822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-19T01:02:01.9766821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-19T01:02:01.9767622Z         	Error:      	Received unexpected error:
2026-05-19T01:02:01.9769560Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:01.9770616Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-19T01:02:01.9772356Z         	Messages:   	Project creation failed: test-acc-tf-p-6600092505987153895, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:01.9773627Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (68.05s)
```

- 2026-05-20 PASS 15 minutes
- 2026-05-21 PASS 18 minutes
- 2026-05-22 PASS 45 minutes
- 2026-05-23

### Error 2026-05-23T00:58:56+00:00
```
2026-05-23T00:58:56.5522501Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-23T00:59:58.8098928Z     shared_resource.go:160: 
2026-05-23T00:59:58.8100507Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T00:59:58.8103751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T00:59:58.8105507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T00:59:58.8107557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T00:59:58.8109316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T00:59:58.8111199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-23T00:59:58.8113162Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-23T00:59:58.8113961Z         	Error:      	Received unexpected error:
2026-05-23T00:59:58.8116004Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T00:59:58.8117053Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-23T00:59:58.8118747Z         	Messages:   	Project creation failed: test-acc-tf-p-146251282137371825, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T00:59:58.8119848Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (62.26s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 21 minutes
- 2026-05-26 PASS 19 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:56:55+00:00
```
2026-05-28T00:56:55.0528919Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-28T00:58:41.9130492Z     shared_resource.go:160: 
2026-05-28T00:58:41.9131653Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:58:41.9133972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T00:58:41.9135797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T00:58:41.9137850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T00:58:41.9139652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T00:58:41.9141606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T00:58:41.9143792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-28T00:58:41.9144640Z         	Error:      	Received unexpected error:
2026-05-28T00:58:41.9146618Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:41.9147856Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-28T00:58:41.9149654Z         	Messages:   	Project creation failed: test-acc-tf-p-8459343697087500987, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:41.9150837Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (106.86s)
```

- 2026-05-29 PASS 19 minutes
- 2026-05-30

### Error 2026-05-30T01:00:09+00:00
```
2026-05-30T01:00:09.3171125Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-30T01:01:13.5577570Z     shared_resource.go:160: 
2026-05-30T01:01:13.5579023Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:01:13.5581355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:01:13.5583190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:01:13.5584972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:01:13.5586739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:01:13.5588877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-30T01:01:13.5590935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-30T01:01:13.5591769Z         	Error:      	Received unexpected error:
2026-05-30T01:01:13.5593755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:13.5594807Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-30T01:01:13.5596550Z         	Messages:   	Project creation failed: test-acc-tf-p-5243144625293788373, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:13.5597694Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (64.24s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 38 minutes
- 2026-06-02

### Error 2026-06-02T01:07:33+00:00
```
2026-06-02T01:07:33.9882160Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-06-02T01:09:13.5746966Z     shared_resource.go:160: 
2026-06-02T01:09:13.5748782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:09:13.5751174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:09:13.5753215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:09:13.5755228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:09:13.5757225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:09:13.5759431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-06-02T01:09:13.5761958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-06-02T01:09:13.5762900Z         	Error:      	Received unexpected error:
2026-06-02T01:09:13.5765041Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:13.5766244Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-06-02T01:09:13.5768067Z         	Messages:   	Project creation failed: test-acc-tf-p-1370649224911288645, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:13.5769300Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (99.59s)
```

- 2026-06-03 PASS 31 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 19 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 minutes
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
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
