# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_multipleEntries Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-21 01:05](#error-2026-05-21t0105210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.08s
[2026-05-23 01:01](#error-2026-05-23t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 11 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09 PASS 12 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 14 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 12 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 10 seconds
- 2026-05-20 PASS 6 seconds
- 2026-05-21

### Error 2026-05-21T01:05:21+00:00
```
2026-05-21T01:05:21.9424300Z === RUN   TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-05-21T01:05:21.9424981Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-3960784771348251797
2026-05-21T01:05:21.9425455Z     resource_test.go:71: 
2026-05-21T01:05:21.9426354Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:21.9428258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:21.9430036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:21.9432095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:71
2026-05-21T01:05:21.9433505Z         	Error:      	Received unexpected error:
2026-05-21T01:05:21.9435453Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:21.9436789Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-05-21T01:05:21.9438622Z         	Messages:   	Project creation failed: test-acc-tf-p-3960784771348251797, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:21.9439893Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_multipleEntries (86.81s)
```

- 2026-05-22 PASS 7 seconds
- 2026-05-23

### Error 2026-05-23T01:01:13+00:00
```
2026-05-23T01:01:13.4370936Z === RUN   TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-05-23T01:01:13.4371705Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-7336587263016836973
2026-05-23T01:01:13.4372193Z     resource_test.go:71: 
2026-05-23T01:01:13.4373122Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:13.4375034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:13.4376868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:13.4378997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:71
2026-05-23T01:01:13.4380741Z         	Error:      	Received unexpected error:
2026-05-23T01:01:13.4382779Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:13.4383965Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-05-23T01:01:13.4385852Z         	Messages:   	Project creation failed: test-acc-tf-p-7336587263016836973, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:13.4387120Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_multipleEntries (66.64s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 17 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28 PASS 7 seconds
- 2026-05-29 PASS 7 seconds
- 2026-05-30 PASS 9 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02 PASS 11 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
