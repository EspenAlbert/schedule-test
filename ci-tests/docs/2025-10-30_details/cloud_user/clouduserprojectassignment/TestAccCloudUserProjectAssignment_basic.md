# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b117abf4374f3298ea67 | dev | flaky_500 | 13.06s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 7 seconds
- 2025-10-03 PASS 13 seconds
- 2025-10-04 PASS 14 seconds
- 2025-10-05 PASS 12 seconds
- 2025-10-06 PASS 8 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 14 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12 PASS 12 seconds
- 2025-10-13 PASS 9 seconds
- 2025-10-14 PASS 15 seconds
- 2025-10-15 PASS 15 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18 PASS 14 seconds
- 2025-10-19 PASS 12 seconds
- 2025-10-20
  - PASS 11 seconds
  - PASS 15 seconds
- 2025-10-21 PASS 13 seconds
- 2025-10-22
  - PASS 15 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 16 seconds
- 2025-10-24 PASS 12 seconds
- 2025-10-25 PASS 14 seconds
- 2025-10-26 PASS 13 seconds
- 2025-10-27 PASS 11 seconds
- 2025-10-28 PASS 15 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.9655725Z === RUN   TestAccCloudUserProjectAssignment_basic
2025-10-30T00:28:18.9656797Z     resource_test.go:22: Creating execution project: test-acc-tf-p-8930928834998908612
2025-10-30T00:28:18.9670053Z   
2025-10-30T00:28:18.9670627Z     resource_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:28:18.9671186Z         
2025-10-30T00:28:18.9671619Z         Error: error when destroying resource
2025-10-30T00:28:18.9671923Z         
2025-10-30T00:28:18.9672270Z         error deleting project (6902b117abf4374f3298ea67):
2025-10-30T00:28:18.9672854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b117abf4374f3298ea67
2025-10-30T00:28:18.9673487Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:28:18.9674091Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:28:18.9674504Z         BadRequestDetail: 
2025-10-30T00:28:18.9674826Z --- FAIL: TestAccCloudUserProjectAssignment_basic (13.62s)
```
