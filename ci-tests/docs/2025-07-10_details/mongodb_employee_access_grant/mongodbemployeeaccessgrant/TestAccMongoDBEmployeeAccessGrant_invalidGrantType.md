# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantType Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029490000) |  | qa |  | 0.01s
[2025-06-05 00:40](#error-2025-06-05t0040440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-5070460160567919769 | dev | flaky_500 | 180.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS a moment
- 2025-04-13 PASS a moment
- 2025-04-14 PASS a moment
- 2025-04-15 PASS a moment
- 2025-04-16
  - PASS a moment
  - PASS a moment
- 2025-04-17 PASS a moment
- 2025-04-18 PASS a moment
- 2025-04-19 PASS a moment
- 2025-04-20 PASS a moment
- 2025-04-21 PASS a moment
- 2025-04-22 PASS a moment
- 2025-04-23 PASS a moment
- 2025-04-24 PASS a moment
- 2025-04-25 PASS a moment
- 2025-04-26 PASS a moment
- 2025-04-27 PASS a moment
- 2025-04-28 PASS a moment
- 2025-04-29 PASS a moment
- 2025-04-30
  - PASS a moment
  - PASS a moment
- 2025-05-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-05-02 PASS a moment
- 2025-05-03 PASS a moment
- 2025-05-04 PASS a moment
- 2025-05-05 PASS a moment
- 2025-05-06 PASS a moment
- 2025-05-07 PASS a moment
- 2025-05-08 PASS a moment
- 2025-05-09 PASS a moment
- 2025-05-10 PASS a moment
- 2025-05-11

### Error 2025-05-11T00:29:49+00:00
```
2025-05-11T00:29:49.2503112Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-11T00:29:49.2503674Z     resource_test.go:100: Creating execution project: test-acc-tf-p-3965984837389268769
2025-05-11T00:29:49.3236078Z     resource_test.go:100: 
2025-05-11T00:29:49.3238308Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:49.3240834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:49.3242996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:49.3245204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:100
2025-05-11T00:29:49.3246109Z         	Error:      	Received unexpected error:
2025-05-11T00:29:49.3247263Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.3247965Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-11T00:29:49.3249167Z         	Messages:   	Project creation failed: test-acc-tf-p-3965984837389268769, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.3250016Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.07s)
```

- 2025-05-12 PASS a moment
- 2025-05-13
  - PASS a moment
  - PASS a moment
- 2025-05-14 PASS a moment
- 2025-05-15 PASS a moment
- 2025-05-16 PASS a moment
- 2025-05-17 PASS a moment
- 2025-05-18 PASS a moment
- 2025-05-19 PASS a moment
- 2025-05-20 PASS a moment
- 2025-05-21 PASS a moment
- 2025-05-22 PASS a moment
- 2025-05-23 PASS a moment
- 2025-05-24 PASS a moment
- 2025-05-25 PASS a moment
- 2025-05-26 PASS a moment
- 2025-05-27 PASS a moment
- 2025-05-28
  - PASS a moment
  - PASS a moment
- 2025-05-29 PASS a moment
- 2025-05-30 PASS a moment
- 2025-05-31 PASS a moment
- 2025-06-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-06-02
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-06-03 PASS a moment
- 2025-06-04 PASS a moment
- 2025-06-05

### Error 2025-06-05T00:40:44+00:00
```
2025-06-05T00:40:44.5546729Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-05T00:40:44.5547337Z     resource_test.go:100: Creating execution cluster: test-acc-tf-c-5070460160567919769
2025-06-05T00:40:45.0842279Z 2025/06/05 00:40:45 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:43:45.2766462Z     resource_test.go:100: 
2025-06-05T00:43:45.2767869Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:43:45.2770224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:43:45.2772465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:100
2025-06-05T00:43:45.2773416Z         	Error:      	Received unexpected error:
2025-06-05T00:43:45.2776604Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-5070460160567919769 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:43:45.2778002Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-05T00:43:45.2780230Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5070460160567919769, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-5070460160567919769 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:43:45.2781693Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (180.72s)
```

- 2025-06-06 PASS a moment
- 2025-06-07 PASS a moment
- 2025-06-08 PASS a moment
- 2025-06-09 PASS a moment
- 2025-06-10 PASS a moment
- 2025-06-11
  - PASS a moment
  - PASS a moment
- 2025-06-12 PASS a moment
- 2025-06-13 PASS a moment
- 2025-06-14 PASS a moment
- 2025-06-15 PASS a moment
- 2025-06-16 PASS a moment
- 2025-06-17 PASS a moment
- 2025-06-18 PASS a moment
- 2025-06-19 PASS a moment
- 2025-06-20 PASS a moment
- 2025-06-21 PASS a moment
- 2025-06-22 PASS a moment
- 2025-06-23 PASS a moment
- 2025-06-24 PASS a moment
- 2025-06-25 PASS a moment
- 2025-06-26 PASS a moment
- 2025-06-27 PASS a moment
- 2025-06-28 PASS a moment
- 2025-06-29 PASS a moment
- 2025-06-30 PASS a moment
- 2025-07-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-07-02 PASS a moment
- 2025-07-03 PASS a moment
- 2025-07-04 PASS a moment
- 2025-07-05 PASS a moment
- 2025-07-06 PASS a moment
- 2025-07-07 PASS a moment
- 2025-07-08 PASS a moment
- 2025-07-09 PASS a moment
- 2025-07-10 PASS a moment