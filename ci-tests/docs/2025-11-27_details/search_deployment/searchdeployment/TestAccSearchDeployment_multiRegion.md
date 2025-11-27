# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) TIMEOUT
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028140000) |  | dev | timeout | 17994.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 33 minutes
- 2025-10-30

### Error 2025-10-30T00:28:14+00:00
```
2025-10-30T00:28:14.4408198Z === RUN   TestAccSearchDeployment_multiRegion
2025-10-30T00:28:14.4410498Z     resource_test.go:130: Creating execution project: test-acc-tf-p-6057251399155582433
2025-10-30T00:28:16.6881529Z === CONT  TestAccSearchDeployment_multiRegion
2025-10-30T03:39:23.4044511Z === NAME  TestAccSearchDeployment_multiRegion
2025-10-30T03:39:23.4045584Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2025-10-30T03:39:23.4046216Z         
2025-10-30T03:39:23.4046778Z         Error: error during search deployment creation
2025-10-30T03:39:23.4047296Z         
2025-10-30T03:39:23.4047889Z           with mongodbatlas_search_deployment.test,
2025-10-30T03:39:23.4049023Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2025-10-30T03:39:23.4050173Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2025-10-30T03:39:23.4050682Z         
2025-10-30T03:39:23.4051369Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T03:39:23.4052105Z         timeout: 3h0m0s)
2025-10-30T03:39:23.4052962Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T03:39:23.4054085Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T05:28:10.5333505Z panic: test timed out after 5h0m0s
2025-10-30T05:28:10.5334240Z 	running tests:
2025-10-30T05:28:10.5334240Z 	running tests:
2025-10-30T05:28:10.5335056Z 		TestAccSearchDeployment_basic (4h59m54s)
2025-10-30T05:28:10.5335884Z 		TestAccSearchDeployment_multiRegion (4h59m54s)
```

- 2025-10-31 PASS 32 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 33 minutes
- 2025-11-04 PASS 30 minutes
- 2025-11-05
  - PASS 30 minutes
  - PASS 28 minutes
- 2025-11-06 PASS 40 minutes
- 2025-11-07 PASS 31 minutes
- 2025-11-08 PASS 54 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 27 minutes
- 2025-11-11 PASS 26 minutes
- 2025-11-12 PASS 29 minutes
- 2025-11-13 PASS 50 minutes
- 2025-11-14 PASS 32 minutes
- 2025-11-15 PASS 26 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 30 minutes
- 2025-11-18 PASS 28 minutes
- 2025-11-19 PASS 27 minutes
- 2025-11-20 PASS 37 minutes
- 2025-11-21 PASS 25 minutes
- 2025-11-22 PASS 25 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 25 minutes
- 2025-11-25 PASS 31 minutes
- 2025-11-26 PASS 24 minutes
- 2025-11-27 PASS 34 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 27 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 26 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 27 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 30 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 30 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
